var BASE_URL = {
    IP:'192.168.1.15',
    HTTP:'http://',
    PORT:'8080',
};

var FIX = {
    com:'https://api.taoguba.com.cn',
    token:'web_4132&A99FC8CEC59DACE59AF20DE1E808DF21',
};


var API = {
    apiGetForums:'/free/topic/apiGetForums?blockID=1&pageNo=1&flag=0',
};


exports.getDefaultUrl = function (name) {
    var url;
    url = getBaseUrl(name,true)+name+".js";
    console.log('getDefaultUrl=='+url);
    return url;
};

exports.getPathUrl = function (path) {
    var url;
    url = getBaseUrl(path,true)+path;
    console.log('getPathUrl=='+url);
    return url;
};


exports.getToken = function () {
    var token;
    token = FIX.token;
    console.log('getToken=='+token);
    return token;
};


exports.apiGetForums = function () {
    var url;
    url = FIX.com+ API.apiGetForums;
    console.log('apiGetForums=='+url);
    return url;
};


function getBaseUrl(bundleUrl, isnav) {
    bundleUrl = new String(bundleUrl);
    var nativeBase;
    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
    if (isAndroidAssets) {
        nativeBase = 'file://assets/dist/';
    }
    else if (isiOSAssets) {
        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    }
    else {
        //'localhost:8080';
        var host = BASE_URL.IP+':'+BASE_URL.PORT;
        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        if (matches && matches.length >= 2) {
            host = matches[1];
        }

        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
        //网页 http://localhost:8080/index.html?page=./dist/weexbar/stocknews.js
        //android 原生 http://192.168.1.15:12580/dist/mainlist.js
        if (typeof window === 'object') {
            nativeBase = isnav ? 'http://' + host + '/index.html?page=./dist/' : '/dist/';
        } else {
            nativeBase = 'http://' + host + '/dist/';
        }
    }

    return nativeBase;
};