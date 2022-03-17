import { useReducer } from 'react';
import PropTypes from 'prop-types';
import CartContext from './cart-context';

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  if (action.type === 'ADD') {
    const updatedToatalAmount = state.totalAmount + (action.payload.price * action.payload.amount);

    const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
    const existingCartItem = state.items[itemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.payload.amount,
      };
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.payload);
    }

    return {
      items: updatedItems,
      totalAmount: updatedToatalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    const itemIndex = state.items.findIndex((item) => item.id === action.id);
    const existingCartItem = state.items[itemIndex];

    const updatedToatalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
    }

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
    dispatch({ type: 'REMOVE', id });
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
