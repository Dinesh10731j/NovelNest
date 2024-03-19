const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONO_URL)
  .then((data) => console.log("Database Succesfully..."))
  .catch((err) => console.log("Database connection problem..."));

const NovelNestSchema = new mongoose.Schema({
  bookname: String,
  booktype: String,
  authorname: String,
});
const NovelNestModel = mongoose.model("NovelNest", NovelNestSchema);
module.exports = { NovelNestModel };
