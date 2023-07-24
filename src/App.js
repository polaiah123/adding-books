import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/book';

function App() {
 
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);


 return (
  <>
  <div className="app">
    <h1 >READING LIST</h1>  
    <BookList  />
    <BookCreate />
    </div>
  </>
    
  )
  }

export default App