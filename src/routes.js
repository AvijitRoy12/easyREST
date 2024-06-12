import express from "express";
import { StatusCodes } from "http-status-codes";
import { userService } from "./services/user.service";

const router = express.Router();

const STATUS = {
  status: "OK",
  failure: "NO",
};

router.get("/test", (req, res) => {
  res.status(StatusCodes.OK);
  res.send("Hello You!");
});

router.post("/add", (req, res) => {
  const data = [];
  const { body: user } = req;
  res.send(`Nothing is added yet until you integrate database.`);
});

router.put("/edit", (req, res) => {
  res.status(StatusCodes.CREATED);
  res.send(`Put request is not possible due to uninitialized database.`);
});

export default router;
