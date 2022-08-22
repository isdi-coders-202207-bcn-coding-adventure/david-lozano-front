import { useState } from "react";
import limitDate from "../../data/limitDate";
import TimeCounter from "../../types/TimeCounter";
import CounterStyled from "./CounterStyled";

const Counter = (): JSX.Element => {
  const initialTime: TimeCounter = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const [time, setTime] = useState(initialTime);

  setInterval(() => {
    const now = new Date().getTime();
    const timeleft = limitDate - now;

    const newTime = {
      days: Math.floor(timeleft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeleft % (1000 * 60)) / 1000),
    };

    setTime(newTime);
  }, 1000);

  return (
    <CounterStyled className="counter">
      <div className="counter__card">
        <span className="counter__digit">
          {time.days.toString().length === 1 ? `0${time.days}` : time.days}
        </span>
        <span className="counter__data-time">days</span>
      </div>
      <div className="counter__card">
        <span className="counter__digit">
          {time.hours.toString().length === 1 ? `0${time.hours}` : time.hours}
        </span>
        <span className="counter__data-time">hours</span>
      </div>
      <div className="counter__card">
        <span className="counter__digit">
          {time.minutes.toString().length === 1
            ? `0${time.minutes}`
            : time.minutes}
        </span>
        <span className="counter__data-time">minutes</span>
      </div>
      <div className="counter__card">
        <span className="counter__digit">
          {time.seconds.toString().length === 1
            ? `0${time.seconds}`
            : time.seconds}
        </span>
        <span className="counter__data-time">seconds</span>
      </div>
    </CounterStyled>
  );
};

export default Counter;
