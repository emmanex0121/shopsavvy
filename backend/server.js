import express from "express";
import dbConnection from "./db/dbConnection.js";
import authRouter from "./routes/authRouter.js";

const app = express();

app.use(express.json());

// routes
app.use("/api/auth", authRouter);


dbConnection();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
