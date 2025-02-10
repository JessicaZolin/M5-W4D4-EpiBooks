import { Card, ListGroup, Container, Button } from 'react-bootstrap';
import './SingleBook.css';
import { Link } from 'react-router-dom';


// The SingleBook component takes a single prop named book, which is an object that represents a book in the library.
const SingleBook = function ({ book, selected, setSelected }) {

    return (
        // SingleBook component displays the image, title, category, price, and asin of a book that is passed as a prop (see AllTheBooks component).

        <Link to={`/BookDetails/${book.asin}`} className='text-decoration-none' data-testid="book-card2">
            <Card
                className='pt-3'
                onClick={() => setSelected(book.asin)}
                style={{
                    width: '18rem', maxHeight: 'fit-content',
                    border: selected === book.asin ? '3px solid red' : 'none'
                }}
                data-testid="book-card"
                >

                <Container className='d-flex justify-content-center p-0'>
                    <Card.Img variant="top" src={book.img} className='object-fit-contain col-12' style={{ height: '350px' }} />
                </Container>
                <Card.Body>
                    <Card.Title className='text-truncate mb-0 pb-1'>{book.title}</Card.Title>
                </Card.Body>
                <Container className='d-flex flex-column p-0'>
                    <ListGroup className="list-group-flush d-flex justify-content-flex-start">
                        <ListGroup.Item>{book.category}</ListGroup.Item>
                        <ListGroup.Item>{(book.price).toFixed(2).replace('.', ',')} €</ListGroup.Item>
                        <ListGroup.Item><u>Asin</u>: {book.asin}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body className='d-flex justify-content-center gap-3' style={{ height: '70px' }}>
                        <Button variant="outline-success">Add to cart</Button>
                        <Button variant="outline-danger">Details</Button>
                    </Card.Body>
                </Container>
            </Card>
        </Link>
    );
}

export default SingleBook;

