import React, { useState } from "react";
import { useCart } from "../../contexts/CartContext";

function Book({ book }) {
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart } = useCart(); // CartContext에서 addToCart 함수 가져오기

  const handleClick = () => {
    setIsInCart(true);
    addToCart(book);
  };

  return (
    <li>
      <img src={book.image} alt={`${book.id}-image`} />
      <h3>{book.name}</h3>
      <p>저자: {book.author}</p>
      <p>가격: {book.price} 원</p>
      <button onClick={handleClick} disabled={isInCart}>
        장바구니 담기
      </button>
    </li>
  );
}

export default Book;
