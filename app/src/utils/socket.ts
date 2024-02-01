import io from "socket.io-client";

const socket = io(
  import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:8080"
);

export default socket;
