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

    // Emettre un événement 'message' à ce client
    socket.emit("players", { text: "Message received!" });

    // // Émettez un événement 'broadcastMessage' à tous les clients, sauf à l'émetteur
    // socket.broadcast.emit("broadcastMessage", { text: "Broadcast message!" });
  });
  socket.on("disconnect", () => {
    console.log(`user disconnected`);
  });
});
