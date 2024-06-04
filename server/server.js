const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

require("dotenv").config();

const app = express();

// import routes
const authRoutes = require("./routes/auth");
const bodyParser = require("body-parser");

// app middleware
app.use(morgan("dev")); // adds logging functionality
app.use(bodyParser.json());
// app.use(cors()); // allows all origins

if ((process.env.NODE_ENV = "development")) {
  app.use(cors({ origin: `http://localhost:3000` }));
}

// middleware
app.use("/api", authRoutes);

const port = process.env.PORT || 8000;
const nodeEnv = process.env.NODE_ENV;

app.listen(port, () => {
  console.log(`Server is running on port ${port} - ${nodeEnv}`);
});
