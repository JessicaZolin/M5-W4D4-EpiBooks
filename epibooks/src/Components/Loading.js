import Spinner from 'react-bootstrap/Spinner';


// This component is a simple loading spinner that will be displayed while the app is fetching data from the server.
const Loading = () => {
  return (
    <>
      <Spinner animation="border" variant="primary" />
    </>
  );
}

export default Loading;