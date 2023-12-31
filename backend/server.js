require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const exerciseRoutes = require("./routes/items")
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/exercise", exerciseRoutes);

mongoose.connect(process.env.MONGODB_URL)

  .then(() => {
    app.listen(4000, () => {
      console.log("Listenning on port 4000 connected to the Database")
    })
  })
  .catch((error) => {
    console.log(error)
  })

