import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Button from './components/Button';
import useWindowSize from './hooks/useWindowSize';
import './App.scss';


const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const windowSize = useWindowSize(); // Use the custom hook to get the window size

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <NavBar />
      <div className="pt-20 text-center">
        <h1 className="text-2xl">Home Page</h1>
        <p className="my-4">Count is {count}</p>
        <Button label="Increment Count" onClick={increment} />
        <p className="mt-4 text-gray-500">Window size: {windowSize.width} x {windowSize.height}</p>
      </div>

      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
