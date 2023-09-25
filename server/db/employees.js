const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: String,
});

const employeeModel = mongoose.model("Users", employeeSchema);
module.exports = employeeModel;
