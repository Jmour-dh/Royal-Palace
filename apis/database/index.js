const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://dhia:123@cluster0.dyajvkn.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("CONNEXION DB OK !");
  })
  .catch((e) => {
    console.log("CONNEXION KO !", e);
  });
