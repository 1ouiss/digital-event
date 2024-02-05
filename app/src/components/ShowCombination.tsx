import { useEffect } from "react";

export default function ShowCombination({
  combination,
  showCombination,
  setShowCombination,
  index,
  setIndex,
  isVisible,
  setIsVisible,
}: {
  combination: number[];
  showCombination: boolean;
  setShowCombination: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
    }, 900);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [combination, index]);

  return (
    <div className="combination-container">
      <div
        className={`combination  ${isVisible ? "animation-combination" : ""}`}
      >
        {combination &&
          index <= combination.length - 1 &&
          showCombination === true && (
            <>
              {combination[index] === 1 || combination[index] === 31 ? (
                <img src="../assets/symbole1.png" alt="" />
              ) : combination[index] === 2 || combination[index] === 47 ? (
                <img src="../assets/symbole2.png" alt="" />
              ) : combination[index] === 4 || combination[index] === 79 ? (
                <img src="../assets/symbole3.png" alt="" />
              ) : (
                <></>
              )}
            </>
          )}
      </div>
    </div>
  );
}
