const express = require("express");
const app = express();

const users = [{
  name: "John",
  kidneys: [{
    healthy: false
  }]
}];

app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  const numberOfHealthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if(johnKidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys
  })
})

app.post("/", function (req, rea) {

})

app.put("/", function (req, rea) {

})

app.delete("/", function (req, rea) {

})

app.listen(3000);