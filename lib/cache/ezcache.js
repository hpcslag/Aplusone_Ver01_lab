/*
    *** If you don't want to use this modules, you can use 'filecache' => npm install filecache
    Originally Reference: http://ithelp.ithome.com.tw/question/10077753 , thank you to help me!
*/
var cache = {};  
function regist(type) {  
    if(!cache[type]) {  
        cache[type] = {};  
    }  
}  
function get(type, key) {  
    if(cache[type] && cache[type][key]) {  
        return cache[type][key];  
    }  
}  
function put(type, key, val) {  
    if(cache[type]) {  
        cache[type][key] = val;  
    }  
}  
function del(type, key) {  
    if(cache[type] && cache[type][key]) {  
        cache[type][key] = null;  
        delete cache[type][key];  
    }  
}  
function query(type, key) {  
    if(cache[type] && cache[type][key]) {  
        return true;  
    } else {  
        return false;  
    }  
}  
module.exports = {  
    regist: regist,  
    get: get,  
    put: put,  
    del: del,  
    query: query  
};  