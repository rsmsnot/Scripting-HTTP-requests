var getHTML = require('./make-it-a-module');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
}

function printHTML(html) {
    console.log(html);
}

getHTML(requestOptions, printHTML);