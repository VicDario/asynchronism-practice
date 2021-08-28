let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function getData(url, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            callback(null, JSON.parse(xhttp.responseText));
        } else {
            const error = new Error('Error ' + url);
            return callback(error, null);
    }
    xhttp.send();
}