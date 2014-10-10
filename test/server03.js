var serv = require('../lib/serv');
var path = require("path");

    var neo = new serv({
        baseDir: "/home/ubuntu/workspace/www", //want to do like "default" can auto handle!
        dirindex: ['index.html', 'index.htm', 'default.htm']
    });
    neo.listen(process.env.PORT,process.env.IP);
    console.log("Server running!!!!"); //Important: use process.env.PORT as the port and process.env.IP as the host in your scripts!