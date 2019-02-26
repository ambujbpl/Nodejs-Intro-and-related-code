// const { process01, process02 } = require("./processes");
const { process011, process022 } = require("./processes1");
const express = require('express')
var request = require("request");
const app = express()
const port = 1100

// We have two processes and we want to run them in parallel
async function main() {
  try {
    console.time("Total Running Time");
    const data = await Promise.all([process011(), process022()]);

    console.log();

    console.log("Process 01 Returned: ", data[0]);
    console.log("Process 02 Returned: ", data[1]);

    console.log();

    console.timeEnd("Total Running Time");    
  } catch(error) {
    console.error("error", error);
  }
}
// So batter approach make individual try catch for each process as well so that it will not effect main MSInputMethodContext.
app.get('/async1', (req, res) => {
    main();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))