// firebase
import { db } from '../firebase/Config'
import { doc, deleteDoc } from 'firebase/firestore'

export default function BookList({ books }) {

  const handleClick = async (id) => {
    console.log(id)

    const docRef = doc(db, 'books', id)
    await deleteDoc(docRef);
  }

  return (
    <div className="book-list">
      <ul>
        {books && books.map(book => (
          <li key={book.id} onClick={() => handleClick(book.id)}>{book.title}</li>
        ))}
      </ul>
    </div>
  )
}