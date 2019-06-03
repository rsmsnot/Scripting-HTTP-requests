module.exports = function getHTML(options, callback) {
    /* Your code here */
    var https = require('https');

    https.get(options, function(response) {

        var buffer = ""

        response.setEncoding('utf8');

        response.on('data', function(data) {
            buffer += data;
        });

        response.on('end', function() {
            callback(buffer);
        })
    });

}