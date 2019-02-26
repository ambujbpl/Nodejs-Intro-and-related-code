const now = require("performance-now")
const PowerPlant = require("./PowerPlant");

// Suppose we're running a grid of power plants!
// We want to group them together in a single array and be able to quickly turn them ON and OFF
async function main() {
  try {  
    const powerPlants = [];

    powerPlants.push(new PowerPlant("01"));
    powerPlants.push(new PowerPlant("02"));
    powerPlants.push(new PowerPlant("03"));
    powerPlants.push(new PowerPlant("04"));
    powerPlants.push(new PowerPlant("05"));

    // Let's turn all of them ON
    // It will give error bcz forEach not work with await function
    powerPlants.forEach(powerPlant => {
      await powerPlant.turnOn();
    });

    // Let's turn all of them OFF
    powerPlants.forEach(powerPlant => {
      await powerPlant.turnOff();
    });

  } catch(error) {
    console.error("error", error);
  }
}
// Note:- We can't work await function with forEach loop so this code will be give an error, so we will use for of loop in the place of forEach in async/ await function
main();

