import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { increment, decrement } from '../store/store';
import Button from '../components/Button'; 

const Home: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value); // Access Redux state
  const dispatch = useDispatch(); // Dispatch actions

  return (
    <div className="pt-20 text-center">
      <h1 className="text-2xl">Home Page</h1>
      <p className="my-4">Count is {count}</p>
      <Button label="Increment" onClick={() => dispatch(increment())} />
      <Button label="Decrement" onClick={() => dispatch(decrement())} />
    </div>
  );
};

export default Home;
