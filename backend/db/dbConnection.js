import mongoose from "mongoose";
import dotenv from "dotenv";
// import { object } from "joi"

dotenv.config({ path: "./config.env" });
export default () => {
  mongoose
    .connect(
      process.env.CONNECTION_STRING.replace(
        "<DB_PASSWORD>",
        process.env.DB_PASSWORD
      )
    )
    .then(() => {
      console.log("Database connection established");
    })
    .catch((error) => {
      console.log("Database connection failed", error);
    });
};
