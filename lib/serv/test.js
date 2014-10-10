var serv = require('./serv');

var neo = new serv({
    baseDir: "default", //or can use path: ../path/to/
    dirindex: ['index.html', 'index.htm', 'default.htm']
});
neo.listen(process.env.PORT,process.env.IP);//Important: use process.env.PORT as the port and process.env.IP as the host in your scripts!

console.log("Server running!!!!"); 