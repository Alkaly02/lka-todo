
const AllTask = ({todos, setTodos, completedTodos, setCompletedTodos, setArchivedTodos}) => {

    const handleDelete = (id) => {
        const newTodos = todos.filter( todo => todo.id !== id);
        setTodos(newTodos);
    }

    const handleCompleted = (id) =>{
        const completed = todos.filter(todo => todo.id === id);
        completed[0].completed = true;

        setCompletedTodos(prevTodo => [...prevTodo, completed[0]]);

        // display success message
        document.querySelector('.success-msg').innerHTML = 'Task completed';
        document.querySelector('.success-msg').style.padding = '0.5rem 1rem';

        setTimeout(() => {
            document.querySelector('.success-msg').innerHTML = '';
            document.querySelector('.success-msg').style.padding = '0';
            document.querySelector('.title').style.marginTop = '0';
        }, 1800)

        // Delete the completed todo from todos
        setTodos(todos.filter( todo => todo.id !== id));
    }

    const handleArchived = (id) => {
        const newArchivedTodo = todos.filter(todo => todo.id === id);
        setArchivedTodos(prevState => [...prevState, newArchivedTodo[0]])
        // display success message
        document.querySelector('.success-msg-2').innerHTML = 'Task archived';
        document.querySelector('.success-msg-2').style.padding = '0.5rem 1rem';

        setTimeout(() => {
            document.querySelector('.success-msg-2').innerHTML = '';
            document.querySelector('.success-msg-2').style.padding = '0';
            document.querySelector('.title').style.marginTop = '0';
        }, 1800)
        // delete the archived todo from todos
        handleDelete(id);
    }

    return (
        <div className="container mt-2 relative-position">
            <div className="success-msg text-light text-center"></div>
            <div className="success-msg success-msg-2 text-light text-center"></div>
            <h1 className="text-center fs-1 mb-4 title">All tasks</h1>
            {
                (todos.length !== 0) ?  todos.map((todo, index) => (
                    <div className="card border-secondary mb-3" key={todo.id}>
                        <h5 className="card-header d-flex">
                            {todo.title}
                            <div className="ms-auto">
                                <button
                                    onClick={() => handleCompleted(todo.id)} className="btn close-btn btn-success fs-6"
                                >c</button>
                                <button
                                    onClick={() => handleArchived(todo.id)} className="btn close-btn btn-info mx-2 fs-6"
                                >v</button>
                                <button
                                    onClick={() => handleDelete(todo.id)} className="btn close-btn btn-secondary fs-6"
                                >x</button>
                            </div>
                            
                        </h5>
                        <div className="card-body text-success">
                            <p className="card-text text-secondary fs-6">{todo.body}</p>
                        </div>
                    </div>
                )) 
                :    
                <p className="text-center">Oupss sorry... No todos !!!</p>
            }
        </div>
    )
}
 
export default AllTask;