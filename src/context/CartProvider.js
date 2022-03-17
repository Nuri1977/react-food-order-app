import { useReducer } from 'react';
import PropTypes from 'prop-types';
import CartContext from './cart-context';

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.payload);
    const updatedToatalAmount = state.totalAmount + (action.payload.price * action.payload.amount);
    return {
      items: updatedItems,
      totalAmount: updatedToatalAmount,
    };
  }
  return state;
};

function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addItemCartHandler = (item) => {
    dispatch({ type: 'ADD', payload: item });
  };

  const removeItemCartHandler = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      { children }
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
