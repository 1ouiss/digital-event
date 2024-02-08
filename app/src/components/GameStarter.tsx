import { useEffect, useState } from "react";
import "../styles/components/gameStarter.scss";

export default function GameStarter() {
  const [starterArray] = useState([7, 6, 5, 4, 3, 2, 1]);
  const [index, setIndex] = useState(0);
  const [showGameStarter, setShowGameStarter] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      if (index < starterArray.length - 1) {
        setIsVisible(false);
        setIndex((prev) => prev + 1);
        setInterval(() => {
          setIsVisible(true);
        }, 5);
      } else {
        setIsVisible(false);
        clearInterval(interval);
        setShowGameStarter(false);
        setInterval(() => {
          setIsVisible(true);
        }, 5);
        console.log("ok");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [starterArray, index]);

  return (
    <>
      <div className="bg-starter">
        <h1
          className={`gamestarter  ${isVisible ? "animation-gamestarter" : ""}`}
        >
          {index <= starterArray.length - 1 && showGameStarter === true
            ? starterArray[index]
            : ""}
        </h1>
      </div>
      <h2>Preparez-vous !</h2>
    </>
  );
}
