import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

const Navbar = () => {
    const navigate = useNavigate()

    const logout = async () => {

        try{
           await signOut(auth);
           navigate('/lka-todo/login');
        }catch(err){
            alert(err)
        }
    }
    return ( 
        <nav className="navbar d-flex flex-column flex-sm-row justify-content-sm-between align-items-center mt-3 px-3 mb-5">
            <h3 className="m-sm-0 mb-3 text-center">LKA Todo</h3>
            <div className="links mb-3 m-sm-0">
                <Link to="/lka-todo/todo/create" className="ms-sm-2  p-2">Add</Link>
                <Link to="/lka-todo/todo/all" className="m-sm-2 mx-1 p-2">All</Link>
                <Link to="/lka-todo/todo/completed" className="p-2 btn-success">Completed</Link>
                <Link to="/lka-todo/todo/archived" className="p-2 mx-1 btn-info">Archived</Link>
            </div>
            <button className="btn btn-danger ms-2" onClick={logout}>Log out</button>   
        </nav>
     );
}
 
export default Navbar;