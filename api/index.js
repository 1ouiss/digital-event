import express from "express";
import playersRouter from "./routers/players.router.js";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

const io = new Server(8080, {
  cors: {
    origin: "*",
  },
});
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", playersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

io.on("connection", (socket) => {
  console.log("a user connected");
  console.log(socket.id);

  socket.on("players", (data) => {
    console.log("Received message from client:", data);

    socket.emit("players", {
      text: "Message received!",
      id: socket.id,
      userId: data.id,
    });
  });

  socket.on("disconnect", () => {
    console.log(`user disconnected`);
  });
});
