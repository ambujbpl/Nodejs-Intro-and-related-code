const express = require('express')
var request = require("request");
const app = express()
const port = 1100
var fs = require('fs');
var userDetails;

// A promise is an enhancement to callbacks that looks towards alleviating these problems. "doSomethingAync" is any callback or asynchronous function which does some sort of processing. This time, when defining the callback, there is a value which is returned called a "promise."


function initialize() {
    // Setting URL and headers for request
    var options = {
        url: 'https://api.github.com/users/ambujbpl',
        headers: {
            'User-Agent': 'request'
        }
    };
    // Return new promise 
    return new Promise(function(resolve, reject) {
    	// Do async job
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        })
    })

}

function main(req,res) {
    var initializePromise = initialize();
    initializePromise.then(function(result) {
        userDetails = result;
        console.log("Initialized user details");
        // Use user details from here
        console.log(userDetails)
        fs.writeFile ("user.json", JSON.stringify(userDetails), function(err) {
            if (err) throw err;
            console.log('file created');
            }
        );        
        res.send(userDetails);
    }, function(err) {
        console.log(err);
    })
}

app.get('/promise', (req, res) => {
    main(req,res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))