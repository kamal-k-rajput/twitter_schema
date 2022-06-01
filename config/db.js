const mongoose = require("mongoose");

mongoose.connect("mongo://localhost:27017/twitter_schema").then(() => {
  console.log("mongodb connected succesfully");
});
