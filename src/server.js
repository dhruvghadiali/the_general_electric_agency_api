const mongoose = require("mongoose");
const app = require("./app");

(async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(process.env.PORT, () => {});
  } catch (err) {
    console.log("error: " + err, process.env.DB_URI);
  }
})();
