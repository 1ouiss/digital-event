import { FC, createContext, useEffect, useState } from "react";
import { ContextType, GameType, PlayerType, Props } from "./utils";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase";

const Context = createContext({} as ContextType);

const ContextProvider: FC<Props> = ({ children }) => {
  const [game, setGame] = useState({} as GameType);
  const [player1, setPlayer1] = useState({} as PlayerType);
  const [player2, setPlayer2] = useState({} as PlayerType);

  const [gameArray1, setGameArray1] = useState([] as number[]);
  const [gameArray2, setGameArray2] = useState([] as number[]);

  const getPlayer1 = () => {
    const collectionRef = collection(db, "player1");
    onSnapshot(collectionRef, async (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setPlayer1({
          id: doc.id,
          ...doc.data(),
        } as PlayerType);
      });
    });
  };

  const getPlayer2 = () => {
    const collectionRef = collection(db, "player2");
    onSnapshot(collectionRef, async (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setPlayer2({
          id: doc.id,
          ...doc.data(),
        } as PlayerType);
        console.log("doc.data().combination =>", doc.data().combination);
      });
    });
  };

  const getGame = () => {
    const collectionRef = collection(db, "game");
    onSnapshot(collectionRef, async (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setGame({
          id: doc.id,
          ...doc.data(),
        } as GameType);
      });
    });
  };

  const getGameArray1 = () => {
    const collectionRef = collection(db, "gameArray1");
    onSnapshot(collectionRef, async (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setGameArray1(doc.data().gameArray);
      });
    });
  };

  const getGameArray2 = () => {
    const collectionRef = collection(db, "gameArray2");
    onSnapshot(collectionRef, async (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setGameArray2(doc.data().gameArray);
      });
    });
  };

  useEffect(() => {
    const url = window.location.href;
    if (url.includes("player1")) {
      getPlayer1();
      getGameArray1();
    }
    if (url.includes("player2")) {
      getPlayer2();
      getGameArray2();
    }
    getGame();
  }, []);

  return (
    <Context.Provider
      value={{
        game,
        setGame,
        player1,
        setPlayer1,
        player2,
        setPlayer2,
        gameArray1,
        setGameArray1,
        gameArray2,
        setGameArray2,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
