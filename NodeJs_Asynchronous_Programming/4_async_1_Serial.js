const { process01, process02 } = require("./processes");
const { process011, process022 } = require("./processes1");
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

async function main1() {
    try {
      console.time("Total Running Time");
      const value01 = await process011();
      const value02 = await process022();
      
      console.log("Process 01 Returned: ", value01);
      console.log("Process 02 Returned: ", value02);
  
      console.log();
  
      console.timeEnd("Total Running Time");        
    } catch(error) {
      console.error("error", error);
    }
  }
// Note: here try - catch block can handle entire process error as well but if any resion process one fail it will fail entire execution as well
// app.get('/async1', (req, res) => {
//     main();
// });

// So batter approach make individual try catch for each process as well so that it will not effect main MSInputMethodContext.
app.get('/async1', (req, res) => {
    main1();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))