const mongoose = require("mongoose");

const billingItemSchema = new mongoose.Schema({
    //   date: String,       
    task: String,
});

module.exports = mongoose.model("BillingModel", billingItemSchema);
  