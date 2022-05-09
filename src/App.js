import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import AllTask from "./components/AllTask";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<AllTask todos={todos} setTodos={setTodos} />} />
          <Route path='create' element={<AddTask 
                                          taskTitle={taskTitle} 
                                          setTaskTitle={setTaskTitle} 
                                          todos={todos} 
                                          setTodos={setTodos}
                                          taskDescription={taskDescription} 
                                          setTaskDescription={setTaskDescription}
                                        />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
