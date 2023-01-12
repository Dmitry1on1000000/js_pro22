import React, { useState } from 'react';
import './counter.css';

type CounterPropsType = {
  title: string;
  count?: number;
};

export const CounterComponent = (props: CounterPropsType) => {
  const { title } = props;

  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };
  const dencrementHandler = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="counter_wrapper">
      <div className="counter_group">
      <button disabled={count === 0} onClick={dencrementHandler}>remove</button>
        <h2>{count}</h2>
        <button onClick={incrementHandler}>add</button>
      </div>
      <div >
      <button className='title' >{title}</button></div>
    </div>
  );
};
