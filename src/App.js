import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import AllTask from "./components/AllTask";
import CompletedTodos from './components/CompletedTodos';
import ArchivedTasks from './components/ArchivedTaks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const savedTodos = JSON.parse(localStorage.getItem('todos'));
  const savedCompletedTodos = JSON.parse(localStorage.getItem('completedTodos'));
  const savedArchivedTodos = JSON.parse(localStorage.getItem('archivedTodos'));

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [todos, setTodos] = useState(savedTodos ? savedTodos : []);
  const [completedTodos, setCompletedTodos] = useState(savedCompletedTodos ? savedCompletedTodos : []);
  const [archivedTodos, setArchivedTodos] = useState(savedArchivedTodos ? savedArchivedTodos : []);

  useEffect(() => {
    localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
  }, [completedTodos])

  useEffect(() => {
    localStorage.setItem('completedTodos', JSON.stringify(archivedTodos));
  }, [archivedTodos])

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
              setArchivedTodos={setArchivedTodos}
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
          <Route path='/archived' element={<ArchivedTasks archivedTodos={archivedTodos} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
