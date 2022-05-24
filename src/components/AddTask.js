
import { useNavigate } from "react-router-dom";
import {v4 as uuid} from "uuid";
import PropTypes from 'prop-types'

const AddTask = ({taskTitle, setTaskTitle, taskDescription ,setTaskDescription, todos, setTodos}) => {

    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        let todo = {
            id: uuid(),
            title: taskTitle,
            body: taskDescription,
            completed: false
        }

        setTodos( prevState => [...prevState, todo]);
        navigate('/lka-todo');
        setTaskTitle('');
        setTaskDescription('');       
    }

    return ( 
        <section className="container my-5">
            <h1 className="text-center fs-1 mb-4">Add task</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label fs-5">Title</label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        id="title" 
                        aria-describedby="title"
                        value={taskTitle}
                        onChange={ e => setTaskTitle(e.target.value)}
                    ></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label fs-5">Description</label>
                    <textarea
                        required
                        className="form-control"
                        placeholder="Leave a Description here" 
                        id="floatingTextarea"
                        value={taskDescription}
                        onChange={ e => setTaskDescription(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-secondary fw-bold py-2 px-4">Add task</button>
            </form>
        </section>
    );
}

AddTask.propTypes = {
    taskTitle: PropTypes.string.isRequired,
    setTaskTitle: PropTypes.string.isRequired,
    taskDescription: PropTypes.string.isRequired,
    setTaskDescription: PropTypes.string.isRequired,
    todos: PropTypes.array.isRequired,
    setTodos: PropTypes.array.isRequired

};
 
export default AddTask;