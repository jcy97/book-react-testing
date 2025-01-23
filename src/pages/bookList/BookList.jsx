import { useState, useEffect } from "react";
import Book from "./Book";
import { useCart } from "../../contexts/CartContext";

function BookList() {
  const [data, setData] = useState([]);
  const { cart, addToCart } = useCart(); // CartContext에서 장바구니 상태 가져오기

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/books");
        if (!response.ok) {
          throw new Error("네트워크 응답이 정상적이지 않습니다.");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>책 고르기</h2>
      <ul>
        {data.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
      <button disabled={cart.length === 0}>장바구니 이동</button>{" "}
    </div>
  );
}
export default BookList;
