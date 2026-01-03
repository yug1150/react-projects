import nonFiction from '../nonfiction.json'
import '../App.css'
import BookCard from './BookCard'

export default function NonFiction() {
  return (
    <div>
      <h1>Non-Fiction Book</h1>

      <div className="books-container">
               {
        nonFiction.map((book, index) => (
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

