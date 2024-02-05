import { useContext, useEffect, useState } from "react";
import GameStarter from "../components/GameStarter";
import "../styles/page/beforeGame.scss";
import { Context } from "../context/Context";

const BeforeGame = ({ playerId }: { playerId: string }) => {
  const { game } = useContext(Context);
  const [displayNone, setDisplayNone] = useState(false);

  useEffect(() => {
    console.log(game);
  }, [game]);

  return (
    <div className="gamestarter-container">
      <div className="bg-decoration-up"></div>
      {game.chronoStarted === true ? (
        <GameStarter />
      ) : (
        <>
          <div className={`logoGame`}></div>
          <h1 className={`title-beforeGame`}>La partie va commencer</h1>
        </>
      )}

      {/* {game.chronoStarted === true
        ? displayNone === true && <GameStarter />
        : ""} */}
      <div className="bg-decoration-down"></div>
    </div>
  );
};
export default BeforeGame;
