import { Row, Col, Alert } from 'react-bootstrap';
import SingleBook from './SingleBook';
import '../App.css';
import { useState } from 'react';



// The AllTheBooks component takes two props: book and searchBook.
// The book prop is an array of objects that represent books in the library.


function AllTheBooks({ book, searchBook }) { 

  const [selected, setSelected] = useState(false);

  const filteredBooks = book.filter((book) => {                                       // book is the array of books passed as props from App.js
    return book.title.toLowerCase().includes(searchBook.toLowerCase());               // filter the books array by title based on the searchBook value passed as props that is updated by the user input
  })
  if (filteredBooks.length === 0) {                                                   // if the filteredBooks array is empty, display a warning message
    return (
      <Row className="container d-flex justify-content-center text-center m-auto">
        <Alert variant="warning">NO BOOKS FOUND!!</Alert>
      </Row>
    );
  } else {                                                                            // if the filteredBooks array is not empty, display the books
    return (

      <Row className="container d-flex justify-content-center flex-wrap m-auto">
        <Col className='d-flex flex-wrap'>                                     {/* display the books in 3 columns through the SingleBook component (props passed to SingleBook component: book, selected, setSelected)*/}
          {filteredBooks.map((book, index) => {
            return (
              <Col key={index} sm={6} md={4} lg={3} className='d-flex justify-content-center flex-wrap mt-4 p-0 pb-4 m-auto'>
                <SingleBook book={book} selected={selected} setSelected={setSelected} />
              </Col>
            );
          })}
        </Col>
      </Row>

    );
  }
}


export default AllTheBooks;