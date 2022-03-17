import './App.css';
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './context/CartProvider';

function App() {
  const [showModal, setShowModal] = useState(false);
  const showCardHandler = () => {
    setShowModal(true);
  };
  const hideCardHandler = () => {
    setShowModal(false);
  };

  return (
    <CartProvider>
      {showModal && <Cart hideCardHandler={hideCardHandler} />}
      <Header showCardHandler={showCardHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
