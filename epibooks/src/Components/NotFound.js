import { Alert, Container } from "react-bootstrap";

const NotFound = () => {
    return (
        <div className="container mt-4">
            <Container className="text-center">
            <Alert variant="danger" className="fs-3">404 - Page Not Found</Alert>
            </Container>
        </div>
    );
}

export default NotFound