let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url) {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url, true);
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url);
                return callback(error, null);
            }
        }
        xhttp.send();
    });
}
