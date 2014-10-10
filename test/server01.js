var serv = require('../lib/serv');
var path = require("path");

    var neo = new serv({
        baseDir: "default",
        dirindex: ['index.html', 'index.htm', 'default.htm']
    });
    neo.listen(process.env.PORT,process.env.IP);
    console.log("Server running!!!!");