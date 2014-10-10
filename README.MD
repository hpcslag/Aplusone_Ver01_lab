Version 01 Feature:
    Released on Version01 can lookup configure.json and run file server!

Run:
    1.modify configure.json if you not run in https://c9.io
    2.node app.js 

Modify:
    app.js "neo.listen()" is your host port and ip, Example: neo.listen(80,"localhost");

Chinese infomation:
    Server 實作上基本都參考伺服器實戰指南: http://ithelp.ithome.com.tw/event/ironman4/index/personal/type/participant-list/page/1/user/20000108
    在系統與安全實作上的強化由個人實作!
    第二版功能會另行發布，本專案為參考用!

Using Module:
    mime
    filecache //x
    
Inside Module:
    cache - Cache
    serv - Server