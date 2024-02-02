import { useEffect, useState } from "react";

export default function ShowCombination() {
  const [combination, setCombination] = useState([1, 2, 3]);
  const [index, setIndex] = useState(0);
  const [showCombination, setShowCombination] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      if (index < combination.length - 1) {
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setShowCombination(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [combination, index]);

  return (
    <>
      hello
      {combination.map((numbers) => (
        <ul>
          <li>{numbers}</li>
        </ul>
      ))}
      {index <= combination.length - 1 &&
        showCombination === true &&
        combination[index]}
    </>
  );
}
