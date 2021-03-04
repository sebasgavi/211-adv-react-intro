import React from 'react';

interface CountProps {
  count: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

export const Count: React.FC<CountProps> = ({ count, onDecrease, onIncrease }) => {

  return <div>
    <button onClick={onDecrease}>-</button>
    {count}
    <button onClick={onIncrease}>+</button>
  </div>;
}