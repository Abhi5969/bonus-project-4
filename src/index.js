require("dotenv").config();
const express = require("express");
const app = express();
const route = require("./routes/route");
const mongoose = require("mongoose");

const coursesRouter = require("./routes/coursesRoute");
const employeesRouter = require("./routes/employeesRoute");

mongoose.set("strictQuery", true);

app.use(express.json());
app.use("/", route);
app.use("/api/v1/courses", coursesRouter);
app.use("/api/v1/employees", employeesRouter);

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Mongodb is connected."))
  .catch((err) => console.log(err));

app.listen(3000, function () {
  console.log("Express app is running on port " + 3000);
});
