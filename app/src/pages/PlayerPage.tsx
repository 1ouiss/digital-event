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
      {!game.isActive && !game.chronoStarted && !game.gameStarted && (
        <BeforeGame playerId={playerId as string} />
      )}
      {game.isActive && game.chronoStarted && game.gameStarted && (
        <InGame playerId={playerId as string} />
      )}
      {game.isActive &&
        !game.chronoStarted &&
        game.gameStarted &&
        game.gameEnded && <EndGame playerId={playerId as string} />}
    </>
  );
};

export default PlayerPage;
