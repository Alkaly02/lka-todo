

const AllTask = ({todos, setTodos}) => {

    const handleDelete = (id) => {

        const newTodos = todos.filter( todo => todo.id !== id);

        setTodos(newTodos);
    }

    return (
        <div className="container mt-2">
            <h1 className="text-center fs-1 mb-4">All tasks</h1>
            {
                (todos.length !== 0) ?  todos.map((todo, index) => (
                    <div className="card border-secondary mb-3" key={todo.id}>
                        <h5 className="card-header d-flex">
                            {todo.title}
                            <button
                                onClick={() => handleDelete(todo.id)} className="btn close-btn btn-secondary ms-auto fs-6"
                            >x</button>
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