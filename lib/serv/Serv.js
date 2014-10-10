var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    url = require("url"),
    mime = require('mime'),
    cache = require('../cache'),
    tools = {  
    getRes: function(respath, dirindex, cb) {  
        if(cache.query('fscache', respath)) {  
            cb(false, respath, cache.get('fscache', respath));  
        } else {  
            /*{END} Check default File like index.html, default.html. [list]*/
            fs.stat(respath, function(err, stats) {  
                if(err) {  
                    cb(true, respath);  
                } else {  
                    if(stats.isDirectory()) {  
                        var ic=0;  
                        fs.readFile(path.join(respath, dirindex[ic]), function dih(err, data) {  
                            var tmp = path.join(respath, dirindex[ic]);  
                            ic++;  
                            if(err) {  
                                if(ic<dirindex.length) {  
                                    fs.readFile(path.join(respath, dirindex[ic]), dih);  
                                } else {  
                                    cb(true, tmp);  
                                }  
                            } else {  
                                var res = {"type": mime.lookup(tmp), "data": data};  
                                cb(false, tmp, res);  
                                cache.put('fscache', respath, res);  
                            }  
                        });  
                    } else {  
                        fs.readFile(respath, function(err, data) {  
                            if(err) {  
                                cb(true);  
                            } else {  
                                var res = {"type": mime.lookup(respath), "data": data};  
                                cb(false, respath, res);  
                                cache.put('fscache', respath, res);  
                            }  
                        });  
                    }  
                }  
            });  
        }  
    }  
},//**Ends
    Serv = function(configure) {
        cache.regist('fscache');
        /*File System setting , Configure File read*/
        if(configure.baseDir == "default"){
             configure.baseDir = path.join(__dirname,'/../../www');
         }

        /*Server Running!*/
        var server = http.createServer(function(req,res){
            var urls = url.parse(req.url);
            var relpath = path.join(configure.baseDir, urls.pathname);
            //Request Name
            tools.getRes(relpath,configure.dirindex,function(err,realpath,data){
                if(err){
                    //get 404
                    res.writeHead(404,{'Content-Type':'text/html'});
                    res.end("<h1>404 Error! File Not Found! </h1>");
                }else{
                    //get 200 finish!
                    res.writeHead(200,{'Content-Type':data.type,'Content-Length':data.data.length});
                    res.end(data.data);
                }
            })
        });
        this.listen = function(port,ip_address) {
            server.listen(port,ip_address,function(){
                console.log("debug host-> "+configure.baseDir);
            });
            return this;
        };
    };
    //End Server
module.exports = Serv;