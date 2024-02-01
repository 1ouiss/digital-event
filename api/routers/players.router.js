import express from "express";

const router = express.Router();

router.get("/players/:id", (req, res) => {
  console.log(req.params.id);
  res.send("Hello World!");
});

export default router;
