export default function BookCard({ title, author, year, price, img }) {
  return (
    <div className="book-card">
      <img src={img} alt={title} className="book-image" />

      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">by {author}</p>
        <p className="book-year">Published: {year}</p>
        <p className="book-price">₹{price}</p>

        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
}
