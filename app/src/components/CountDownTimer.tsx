import { useEffect, useState } from "react";

interface ICountdown {
  minutes: number;
  seconds: number;
}

const CountDownTimer = ({ minutes, seconds, setEndTimer }: any) => {
  const [time, setTime] = useState<ICountdown>({
    minutes,
    seconds,
  });

  const tick = () => {
    // setEndTimer(false);
    setEndTimer(false);
    if (time.minutes === 0 && time.seconds === 0) reset();
    else if (time.seconds === 0) {
      setTime({ minutes: time.minutes - 1, seconds: 59 });
    } else {
      setTime({
        minutes: time.minutes,
        seconds: time.seconds - 1,
      });
    }
  };

  const reset = () => {
    setEndTimer(true);
    setTime({ minutes: time.minutes, seconds: time.seconds });
  };

  useEffect(() => {
    console.log("okok", minutes, seconds);
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div>
      <p>{`${time.minutes.toString().padStart(2, "0")}:${time.seconds
        .toString()
        .padStart(2, "0")}`}</p>
    </div>
  );
};

export default CountDownTimer;
