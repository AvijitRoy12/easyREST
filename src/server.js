import express from "express";
import { StatusCodes } from "http-status-codes";

const app = express();
const port = 3001;

app.get("/test", (req, res) => {
  res.status(StatusCodes.OK);
  res.send("Hello You!");
});

app.post("/add", (req, res) => {
  res.status(StatusCodes.CREATED);
  res.send(`Nothing is added yet until you integrate database.`);
});

app.put("/edit", (req, res) => {
  res.status(StatusCodes.CREATED);
  res.send(`Put request is not possible now due to uninitialized database.`);
});

app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});
