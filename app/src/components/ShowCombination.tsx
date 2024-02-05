import { useEffect, useState } from "react";
import "../styles/components/showCombination.scss";

export default function ShowCombination() {
  const [combination, setCombination] = useState([1, 2, 3]);
  const [index, setIndex] = useState(0);
  const [showCombination, setShowCombination] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      if (index < combination.length - 1) {
        setIsVisible(false);
        setIndex((prev) => prev + 1);
        setInterval(() => {
          setIsVisible(true);
        }, 5);
      } else {
        clearInterval(interval);
        setShowCombination(false);
        setIsVisible(false);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [combination, index]);

  return (
    <div className="combination-container">
      <h1
        className={`combination  ${isVisible ? "animation-combination" : ""}`}
      >
        {index <= combination.length - 1 &&
          showCombination === true &&
          combination[index]}
      </h1>
    </div>
  );
}
