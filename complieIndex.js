var jade = require('jade');
var fs = require('fs');
var less = require('less');

var outPutFile = 'output/';
var files = [
    'square/square.less',
    'style.less',
    'transitions/transitions.less',
    'positions.less',
    'transforms/transforms.less',
    'keyframe/keyframe.less',
    'pac-man/style.less'
];
var css = [];
var file;
var dataNew;


var fn = jade.compileFile('index.jade');
var html = fn();

var writeFile = function (path, file) {
    fs.writeFileSync(path, file);
};

var lessOutput = function (output) {
    css.push(output.css);
};

var lessError = function (err) {
    console.log('error', err);
};

var outPutCss = function () {
    writeFile(outPutFile + "style.css", css.join(''));
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


writeFile(outPutFile + "index.html", html);
