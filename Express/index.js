const express = require("express");
const app = express();

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

//removing all the unhealthy kidneys
app.delete("/", function (req, res) {
  if (isThereAtLeastOneUnhealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true
        })
      }
    }
    users[0].kidneys = newKidneys;
    res.json({ msg: "done" });
  }
  else {
    res.status(411).json({
      msg: "You have no bad Kindeys"
    });
  }
});

function isThereAtLeastOneUnhealthyKidney() {
  const kidneys = users[0].kidneys;
  for (let i = 0; i < kidneys.length; i++) {
    if (!kidneys[i].healthy) {
      return true;
    }
  }
  return false;
}

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});