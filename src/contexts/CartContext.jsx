import React, { createContext, useState, useContext } from "react";

// CartContext 생성
const CartContext = createContext();

// CartProvider 컴포넌트
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, book) => total + book.price, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// CartContext를 사용하는 커스텀 훅
export const useCart = () => {
  return useContext(CartContext);
};
