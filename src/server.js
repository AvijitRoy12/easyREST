import express from "express";
import appRoutes from "./routes";

const app = express();
const port = 3001;
app.use("/v1", appRoutes);

app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});
