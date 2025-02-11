import { Nav, Navbar, NavDropdown, Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function MyNav({ Brand, searchBook, onchange, token, setToken }) {

  return (
    <Navbar expand="lg" className="bg-body-tertiary position-sticky top-0 z-3">
      <div className="container-fluid px-5 justify-content-between">
        <Navbar.Brand as={Link} to="/">{Brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        {/* // the input field that allows the user to insert his token */}
        <Row className=' d-flex justify-content-center align-items-center m-auto'>
          <Form>
            <Form.Group className='d-flex align-items-center justify-content-center gap-2'>
              <Form.Label className='text-black m-0'>Token:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Insert your token"
                value={token}
                onChange={setToken} />
            </Form.Group>
          </Form>
        </Row>

        {/* // The search bar that allows the user to search for a book and update its value. */}
        <Row className=' d-flex justify-content-center align-items-center m-auto'>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Search for a book"
                value={searchBook}
                onChange={onchange} />
            </Form.Group>
          </Form>
        </Row>

      </div>
    </Navbar>
  );
}

export default MyNav;
