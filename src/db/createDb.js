/**
 * Connect to mongo
 */
const mongoose = require("mongoose");
const db = mongoose.connection;

const cfg = require("../config/mongocfg.json");
const url = cfg.url + "mydb";



/** 
 * connect asyn to mongo db 
 * 
 * */
module.exports = () => {
  mongoose.connect(url, { useNewUrlParser: true });
  /**
   * db connections callbacks
   */
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log("db connected!");
  });


}


