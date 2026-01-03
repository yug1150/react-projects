import fiction from '../fiction.json'
import '../App.css'
import BookCard from './BookCard'



export default function Fiction() {
  return (
    <div>
      <h1></h1>

      <div
        className="books-container"
        style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
      >
        {
        fiction.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          author={book.author}
          year={book.year}
          price={book.price}
          img={book.img}
        />
      ))
        }
      </div>
    </div>
  );
}
