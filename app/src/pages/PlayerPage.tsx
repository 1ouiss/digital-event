import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";
import BeforeGame from "./BeforeGame";
import InGame from "./InGame";
import EndGame from "./EndGame";

const PlayerPage = () => {
  const { playerId } = useParams();
  const { game } = useContext(Context);

  return (
    <>
      {/* {game.status === "before" && <BeforeGame playerId={playerId as string} />}
      {game.status === "inGame" && <InGame playerId={playerId as string} />}
      {game.status === "endGame" && <EndGame playerId={playerId as string} />} */}
      <InGame playerId={playerId as string} />
    </>
  );
};

export default PlayerPage;
