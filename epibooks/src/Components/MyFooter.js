import { Nav } from "react-bootstrap"; 


function MyFooter() {
    return (
        <footer className="bg-body-tertiary text-center text-lg-start position-fixed bottom-0 w-100 py-2">
            <div className="d-flex px-5 py-2 justify-content-between">

                <div className="d-flex justify-content-between w-100 px-2">
                    <p className="text-muted mb-0 d-flex align-items-center">© 2023 Company, Inc</p>
                    <div className="d-flex align-items-center gap-5 pe-3">
                        <Nav.Link className="text-muted" href="#">Privacy Policy</Nav.Link>
                        <Nav.Link className="text-muted" href="#">Terms of Use</Nav.Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default MyFooter;