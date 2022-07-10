const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.Mongo_URI)
    .then(() => {
      console.log("MongoDB connection Successful!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;