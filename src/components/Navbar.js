import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar mt-3 px-3 mb-5">
            <h3>LKA Todo</h3>
            <div className="links">
                <Link to="/lka-todo" className="m-2 p-2">All task</Link>
                <Link to="create" className="ms-2 p-2">Add task</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;