const express = require('express')
const app = express()
const port = 1100
var fs = require('fs');
var file_data;
var copyFile = function(source, destination, next) {
  // we should read source file first
  file_data = fs.readFile(source, function(err, data) {
    if (err) return next(err); // error occurred
    // now we can write data to destination file
    console.log("data in source file : ",data.toString());
    fs.writeFile(destination, data, next);
  });
};
app.get('/callback', (req, res) => {
    copyFile('source.txt', 'destination.txt', function(err,data) {
        //this is callback function
        if (err) {
          // either fs.readFile or fs.writeFile returned an error
          console.log(err.stack || err);
        } else {
          console.log('Success!');
          res.send("Your text fiile save in destination");
        }
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))