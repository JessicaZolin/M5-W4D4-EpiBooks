import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import Welcome from './Components/Welcome';
import AllTheBooks from './Components/AllTheBooks';
import BookDetails from './Components/BookDetails';
import NotFound from './Components/NotFound';
import books from './Books/fantasy.json';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';


function App() {
  // We're using the useState hook to create a state variable named searchBook.
  // This variable will hold the value of the text that the user types into the search bar.
  // The initial value of the variable is an empty string.
  // 
  // The setSearchBook function is a function that can be used to update the value of the searchBook variable.
  // It takes a single argument, which is the new value of the searchBook variable.
  // 
  // The console.log statement is just here for debugging purposes. It will print the value of the searchBook variable to the console whenever the value of the variable changes.
  const [searchBook, setSearchBook] = useState('');
  console.log('The value of the searchBook variable is: ', searchBook);

  return (
    <BrowserRouter>
      <div className="bg-dark text-white">

        <MyNav Brand="BOOKS ON A TREE" searchBook={searchBook} onchange={(event) => setSearchBook(event.target.value)} />
        <Welcome />
        <main style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<AllTheBooks book={books} searchBook={searchBook} />} />
            <Route path="/BookDetails/:asin" element={<BookDetails book={books} />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </main>
        <MyFooter />

      </div >
    </BrowserRouter>
  );
}

export default App;
