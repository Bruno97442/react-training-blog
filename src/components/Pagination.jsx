import { ListGroup, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Pagination = ({ pageLinks }) => {
    pageLinks
        (
            <div>
                {
                    pageLinks.map(link => (
                        <li className="page-item"><NavLink className="page-link" to={pageUrl}>{pageNb}</NavLink></li>

                    ))
                }
                <Nav aria-label="Page navigation example">
                    <ListGroup className="pagination">
                        <li className="page-item"><NavLink className="page-link" href="#">Previous</NavLink></li>
                        <li className="page-item"><NavLink className="page-link" href="#">1</NavLink></li>
                        <li className="page-item"><NavLink className="page-link" href="#">2</NavLink></li>
                        <li className="page-item"><NavLink className="page-link" href="#">3</NavLink></li>
                        <li className="page-item"><NavLink className="page-link" href="#">Next</NavLink></li>
                    </ListGroup>
                </Nav>
            </div>
        )
}
export default Pagination