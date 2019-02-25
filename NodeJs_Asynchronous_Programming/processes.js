const util = require("util");
const wait = util.promisify(setTimeout);
var fs = require('fs');
var data1, data2;
module.exports = {
  async process01() {
    console.log("Process 01 :- read source file started");
    console.time("Process 01 ended");
    fs.readFile("source.txt", function(err, data) {
      if (err) throw err;
        console.log('file data is : ',data.toString());
        data1 = data.toString()
      }
    );     
    await wait(5000);// wait for 5000 ms = 5 sec
    console.timeEnd("Process 01 ended");  
    console.log("data1 : ",data1);  
    return data1;
  },

  async process02() {
    console.log("Process 02 :- read intro.txt file started");
    console.time("Process 02 ended");
    fs.readFile("intro.txt", function(err, data) {
      if (err) throw err;
        console.log('file data is : ',data.toString());
        data2 = data.toString()
      }
    );
    await wait(5000);// wait for 5000 ms = 5 sec
    console.timeEnd("Process 02 ended");
    console.log("data2 : ",data2);
    return data2;
  }
}
