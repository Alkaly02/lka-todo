
const CompletedTodos = ({completedTodos}) => {
    return(  
        <>
            <div className="container mt-2">
                <h1 className="text-center fs-1 mb-4 text-success">Completed tasks</h1>
                {
                    (completedTodos.length !== 0) ? completedTodos.map(todo => (
                        <div className="card border-secondary mb-3" key={todo.id}>
                            <h5 className="card-header d-flex">
                                <strike>{todo.title}</strike>   
                            </h5>
                            <div className="card-body text-success">
                                <p className="card-text text-secondary fs-6"><strike>{todo.body}</strike></p>
                            </div>
                        </div>
                    )) : <p className="text-center">No completed todos</p>
                }
            </div>
        </>
    );
}
 
export default CompletedTodos;