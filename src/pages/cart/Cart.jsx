import React from "react";
import { useCart } from "../../contexts/CartContext";
import CartItem from "./CartItem";

const mockBooks = [
  {
    id: 1,
    name: "안네의 일기",
    author: "안네 프랑크",
    price: 8000,
    image: "https://fakeimg.pl/200x300/cc6600",
  },
  {
    id: 2,
    name: "소년이 온다",
    author: "한강",
    price: 13500,
    image: "https://fakeimg.pl/200x300/cc6600",
  },
];

function Cart() {
  const { addToCart, cart } = useCart();

  // 총 가격 계산 함수
  const getTotalPrice = () => {
    return mockBooks.reduce((total, book) => total + book.price, 0);
  };

  return (
    <div>
      <h1>장바구니</h1>
      {mockBooks.length === 0 ? (
        <p>장바구니가 비어있습니다.</p>
      ) : (
        <div>
          {mockBooks.map((book) => (
            <CartItem key={book.id} book={book} />
          ))}
          <h2>총 가격: {getTotalPrice()}원</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
