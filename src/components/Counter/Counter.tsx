const Counter = (): JSX.Element => {
  return (
    <div className="counter">
      <div className="counter-days">
        <span className="counter__digit">02</span>
        <span className="counter__title">days</span>
      </div>
      <div className="counter-hours">
        <span className="counter__digit">20</span>
        <span className="counter__title">hours</span>
      </div>
      <div className="counter-minutes">
        <span className="counter__digit">34</span>
        <span className="counter__title">minutes</span>
      </div>
      <div className="counter-seconds">
        <span className="counter__digit">09</span>
        <span className="counter__title">seconds</span>
      </div>
    </div>
  );
};

export default Counter;
