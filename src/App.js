import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import AllTask from "./components/AllTask";
import CompletedTodos from './components/CompletedTodos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const savedTodos = JSON.parse(localStorage.getItem('todos'));
  const savedCompletedTodos = JSON.parse(localStorage.getItem('completedTodos'));

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [todos, setTodos] = useState(savedTodos ? savedTodos : []);
  const [completedTodos, setCompletedTodos] = useState(savedCompletedTodos ? savedCompletedTodos : []);

  useEffect(() => {
    localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
  }, [completedTodos])

  useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route 
            path='/lka-todo' 
            element={
              <AllTask 
              todos={todos} 
              setTodos={setTodos} 
              completedTodos={completedTodos}
              setCompletedTodos={setCompletedTodos}
              />
            } 
          />
          <Route 
            path='/create' 
            element={
              <AddTask 
              taskTitle={taskTitle} 
              setTaskTitle={setTaskTitle} 
              todos={todos} 
              setTodos={setTodos}
              taskDescription={taskDescription} 
              setTaskDescription={setTaskDescription}
            />
          } 
          />
          <Route path='/completed' element={<CompletedTodos completedTodos={completedTodos} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
