const ArchivedTasks = ({archivedTodos, setTodos, setArchivedTodos}) => {

    const handleDesableAchieved = (id) => {
        const desabledArchive = archivedTodos.filter(todo => todo.id === id);
        setTodos(prevState => [...prevState, desabledArchive[0]]);
        // delete desabled archive from archivedTodos
        setArchivedTodos(archivedTodos.filter(todo => todo.id !== id))
    }

    return (  
        <div className="container mt-2">
                <h1 className="text-center fs-1 mb-4 text-info">Archived tasks</h1>
                {
                    (archivedTodos.length !== 0) ? archivedTodos.map(todo => (
                        <div className="card border-secondary mb-3" key={todo.id}>
                            <h5 className="card-header d-flex">
                                {todo.title}  
                                <div className="ms-auto">
                                <button
                                    onClick={() => handleDesableAchieved(todo.id)} className="btn close-btn btn-success fs-6"
                                >d</button>
                            </div>
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