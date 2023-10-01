const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");

const app = express();

//dot config
dotenv.config();

//mongodb connection
connectDB();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `node server running in ${process.env.DEV_MODE} on ${process.env.PORT}`
      .bgBlue.white
  );
});
