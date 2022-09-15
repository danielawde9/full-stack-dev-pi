require("dovenv").config;

const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

const connectDB = () => {
  mongoose.connect(mongoString);

  const database = mongoose.connection;

  database.on("error", (err) => console.log(err));
  database.once("connected", () =>
    console.log("Connected to database " + database)
  );
};
