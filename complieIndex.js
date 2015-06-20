var jade = require('jade');
var fs = require('fs');
var less = require('less');

var files = ['square/square.less', 'style.less'];
var outPutFile = 'output';
var css = [];
var file;
var dataNew;


var fn = jade.compileFile('index.jade');
var html = fn();

var writeFile = function (path, file) {
    fs.writeFileSync(outPutFile + path, file);
};

var lessOutput = function (output) {
    //console.log(output.css);
    css.push(output.css);
    //console.log(css);
};

var lessError = function (err) {
    console.log('error', err);
};

var outPutCss = function () {
    writeFile("style.css", css.join(''));
};

var handleFile = function (err, data) {
    if (err) throw err;
    dataNew = data.toString();
    less.render(dataNew)
        .then(lessOutput, lessError)
        .then(outPutCss);
};



for (var i = 0; i < files.length; i++) {
    file = files[i];
    fs.readFile(file, handleFile);
}




writeFile("index.html", html);
