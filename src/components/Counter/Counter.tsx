const Counter = (): JSX.Element => {
  return (
    <div className="counter">
      <div className="counter__card">
        <span className="counter__digit">02</span>
        <span className="counter__data-time">days</span>
      </div>
      <div className="counter__card">
        <span className="counter__digit">20</span>
        <span className="counter__data-time">hours</span>
      </div>
      <div className="counter__card">
        <span className="counter__digit">34</span>
        <span className="counter__data-time">minutes</span>
      </div>
      <div className="counter__card">
        <span className="counter__digit">09</span>
        <span className="counter__data-time">seconds</span>
      </div>
    </div>
  );
};

export default Counter;
