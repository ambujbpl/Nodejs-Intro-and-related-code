const express = require('express')
var request = require("request");
const app = express()
const port = 1100

// Generators are useful when carrying out concepts such as 'lazy execution'. This basically means that by suspending execution and resuming at will, we are able to pull values only when we need to.
// Generators have the below 2 key methods
// 1 Yield method – The yield method is called in a function to halt the execution of the function at the specific line where the yield method is called.
// 2 Next method – This method is called from the main application to resume the execution of a function which has a yield method. The execution of the function will continue till the next yield method or till the end of the method.


function* Add(x) {
    yield x + 1;
    var y = yield(null);
    y = 6
    return x + y;
}
 
app.get('/generator', (req, res) => {

    var gen = Add(5);
    console.log("gen : ",gen);
    var val1 = gen.next();
    console.log("val1 : ",val1);
    
    var val2 = gen.next(); 
    console.log("val2 : ",val2);
        
    var val3 = gen.next(); 
    console.log("val3 : ",val3);
    res.send(val3);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))