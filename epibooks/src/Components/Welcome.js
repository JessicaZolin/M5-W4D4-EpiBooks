import { Container, Alert } from "react-bootstrap";


// The Welcome component is a simple functional component that displays a welcome message to the user.
function Welcome() {
    return (
        <div className="container mt-4">
            <Container className="text-center">
            <Alert variant="success" className="fs-3">Benvenuto in BOOKS ON A TREE! :) </Alert>
            </Container>
        </div>
    );  
}

export default Welcome;