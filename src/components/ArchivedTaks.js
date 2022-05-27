const ArchivedTasks = ({archivedTodos}) => {
    return (  
        <div className="container mt-2">
                <h1 className="text-center fs-1 mb-4 text-info">Archived tasks</h1>
                {
                    (archivedTodos.length !== 0) ? archivedTodos.map(todo => (
                        <div className="card border-secondary mb-3" key={todo.id}>
                            <h5 className="card-header d-flex">
                                {todo.title}  
                            </h5>
                            <div className="card-body text-success">
                                <p className="card-text text-secondary fs-6">{todo.body}</p>
                            </div>
                        </div>
                    )) : <p className="text-center">No Archived todos</p>
                }
            </div>
    );
}
 
export default ArchivedTasks;