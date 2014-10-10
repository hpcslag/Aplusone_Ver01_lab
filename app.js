var serv = require('./lib/serv'),
    fs = require('fs');
    
    fs.readFile("configure.json",function(err,data){
            if(err){
                console.log('dead');
            }else{
                var patt = JSON.parse(data.toString());
                var neo = new serv(patt);
                neo.listen(80,"localhost");
            }
    });