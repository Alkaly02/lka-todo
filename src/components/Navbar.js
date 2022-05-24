import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar d-flex flex-column flex-sm-row justify-content-sm-between align-items-center mt-3 px-3 mb-5">
            <h3 className="m-sm-0 mb-3 text-center">LKA Todo</h3>
            <div className="links mb-3 m-sm-0">
                <Link to="/completed" className="p-2 btn-success">Completed task</Link>
                <Link to="/lka-todo" className="m-sm-2 mx-1 p-2">All task</Link>
                <Link to="/create" className="ms-sm-2  p-2">Add task</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;