const mongoose = require("mongoose");

const url =
  "mongodb+srv://blogappication:uZLwfuBNDmfIUhsV@cluster0.e8uvhh1.mongodb.net/?retryWrites=true&w=majority";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
// KQ3JbvX6ZT6dXt6A
//uZLwfuBNDmfIUhsV