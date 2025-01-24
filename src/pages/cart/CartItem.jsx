function CartItem({ book }) {
  return (
    <div className="cart-item">
      <img src={book.image} alt={`${book.id}-image`} />
      <h2>{book.name}</h2>
      <p>저자: {book.author}</p>
      <p>가격: {book.price} 원</p>
    </div>
  );
}
export default CartItem;
