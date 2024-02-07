import React, { useState, useEffect } from 'react';

interface CounterProps {
  targetNumber: number;
  speed: number;
}

const Counter: React.FC<CounterProps> = ({ targetNumber, speed }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= targetNumber) {
          clearInterval(intervalId);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, speed);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [targetNumber, speed]);

  return (
    <div>
      <p className="text-3xl text-yellow md:text-5xl">{count}+</p>
      <span className="animate-pulse text-lg text-accent">
        Years of experiance
      </span>
    </div>
  );
};

export default Counter;
