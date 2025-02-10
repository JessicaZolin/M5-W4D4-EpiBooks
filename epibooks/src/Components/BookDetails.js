import { useParams, Link } from "react-router-dom";
import { Card, Container, Button } from 'react-bootstrap';
import CommentArea from "./CommentArea";

const BookDetails = (book) => {
    const params = useParams()
    const selectedBook = book.book.find(book => book.asin === params.asin)
    return (
        <Container className="px-4 pt-4">
            <Button className="mx-3" variant="light" as={Link} to="/">Back to all books</Button>

            <Card className='d-flex mt-4 bg-dark text-light'>
                <div className="d-flex flex-row mb-4">
                    <Card.Img src={selectedBook.img} className="card-img-top m-3 mt-4 border border-rounded" alt="..." style={{ width: '300px' }} />
                    <Card.Body className="d-flex flex-column justify-content-between mt-2">
                        <div>
                            <Card.Title>{selectedBook.title}</Card.Title>
                            <Card.Text>{selectedBook.category}</Card.Text>
                            <Card.Text>{(selectedBook.price).toFixed(2).replace('.', ',')} € </Card.Text>
                            <Card.Text>{selectedBook.asin}</Card.Text>
                        </div>
                        <div className="d-flex flex-row gap-3 justufy-self-end">
                            <Button variant="outline-success">Add to cart</Button>
                        </div>
                    </Card.Body>
                </div>

                <CommentArea asin={selectedBook.asin} book={book.book} />

            </Card>
        </Container>
    );
}

export default BookDetails;