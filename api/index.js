import express from "express";
import playersRouter from "./routers/players.router.js";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use("/api", playersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
