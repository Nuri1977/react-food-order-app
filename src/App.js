import './App.css';
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [showModal, setShowModal] = useState(false);
  const showCardHandler = () => {
    setShowModal(true);
  };
  const hideCardHandler = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && <Cart hideCardHandler={hideCardHandler} />}
      <Header showCardHandler={showCardHandler} />
      <Meals />
    </div>
  );
}

export default App;
