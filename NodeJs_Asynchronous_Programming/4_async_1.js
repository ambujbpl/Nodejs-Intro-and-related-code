const { process01, process02 } = require("./processes");
const express = require('express')
var request = require("request");
const app = express()
const port = 1100
// We have two processes and we want to run them sequentially
async function main() {
  try {
    console.time("Total Running Time");
    const value01 = await process01();
    const value02 = await process02();
    
    console.log("Process 01 Returned: ", value01);
    console.log("Process 02 Returned: ", value02);

    console.log();

    console.timeEnd("Total Running Time");  
  } catch(error) {
    console.error("error", error);
  }
}

app.get('/async1', (req, res) => {
    main();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))