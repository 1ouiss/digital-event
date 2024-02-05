import { FC, createContext, useEffect, useState } from "react";
import { ContextType, GameType, PlayerType, Props } from "./utils";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase";

const Context = createContext({} as ContextType);

const ContextProvider: FC<Props> = ({ children }) => {
  const [game, setGame] = useState({} as GameType);
  const [player1, setPlayer1] = useState({} as PlayerType);
  const [player2, setPlayer2] = useState({} as PlayerType);

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

  useEffect(() => {
    const url = window.location.href;
    if (url.includes('player1')) {
      getPlayer1();
    }
    if (url.includes('player2')) {
      getPlayer2();
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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
