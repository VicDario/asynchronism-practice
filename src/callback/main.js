let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let api = 'https://rickandmortyapi.com/api/character/'

function fetchData(url, callback) {
    let xhttp = new XMLHttpRequest();
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
}

fetchData(api, function(error, data) {
    if (error) return console.error(error);
    fetchData(api + data.results[0].id, function(error2, data2) { 
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3) {
            if (error3) return console.error(error3);
            console.log(`Number of characters: ${data.info.count}`);
            console.log(`Name: ${data2.name}`);
            console.log(`Origin: ${data3.dimension}`);
        });
    });
});