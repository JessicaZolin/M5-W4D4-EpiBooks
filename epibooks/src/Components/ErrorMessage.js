import Alert from 'react-bootstrap/Alert';


// The ErrorMessage component is a simple functional component that displays an error message.
const ErrorMessage = ({ message }) => {
    return (
        <Alert className='mx-2' variant="danger">
            {message}
        </Alert>
    );
}

export default ErrorMessage;