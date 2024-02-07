import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "20px",
        fontSize: "2rem",
      }}
    >
      <Link to="/players/player1">Player 1</Link>
      <Link to="/players/player2">Player 2</Link>
    </div>
  );
};

export default NotFound;
