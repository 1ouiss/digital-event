import { useEffect } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
// import socket from "../utils/socket";

const PlayerPage = () => {
  const { id } = useParams();

  useEffect(() => {
    const socket = io(import.meta.env.VITE_REACT_APP_API_URL);

    socket.on("connect", () => {
      console.log("connected");
    });

    socket.emit("players", { id });

    socket.on("players", (data) => {
      console.log(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <h1>Player Page</h1>
      <p>Player ID: {id}</p>
    </>
  );
};

export default PlayerPage;
