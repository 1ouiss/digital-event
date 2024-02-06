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
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setIsVisible(false);
        setTimeout(() => {
          setShowCombination(false);
        }, 300);
      }
    }, 800);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [combination, index, isVisible]);

  return (
    <div className="combination-container">
      <div
        className={`combination  ${
          isVisible ? "animation-combination" : "animation-fade-out"
        }`}
      >
        {combination &&
          index <= combination.length - 1 &&
          showCombination === true && (
            <>
              {combination[index] === 1 || combination[index] === 31 ? (
                <img
                  src="../assets/symbole1.png"
                  alt=""
                  className="animation-symbole"
                />
              ) : combination[index] === 2 || combination[index] === 47 ? (
                <img
                  src="../assets/symbole2.png"
                  alt=""
                  className="animation-symbole"
                />
              ) : combination[index] === 4 || combination[index] === 79 ? (
                <img
                  src="../assets/symbole3.png"
                  alt=""
                  className="animation-symbole"
                />
              ) : (
                <></>
              )}
            </>
          )}
      </div>
    </div>
  );
}
