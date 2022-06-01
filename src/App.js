import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { AuthProvider } from './context/UserContext';
import Signup from './components/Signup';
import Private from './components/private/Private';
import AddTask from "./components/AddTask";
import AllTask from "./components/AllTask";
import CompletedTodos from './components/CompletedTodos';
import ArchivedTasks from './components/ArchivedTaks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Login from './components/Login';

export const AppGlobalContext = React.createContext({});

function App() {
  const savedTodos = JSON.parse(localStorage.getItem('todos'));
  const savedCompletedTodos = JSON.parse(localStorage.getItem('completedTodos'));
  const savedArchivedTodos = JSON.parse(localStorage.getItem('archivedTodos'));

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [todos, setTodos] = useState(savedTodos ? savedTodos : []);
  const [completedTodos, setCompletedTodos] = useState(savedCompletedTodos ? savedCompletedTodos : []);
  const [archivedTodos, setArchivedTodos] = useState(savedArchivedTodos ? savedArchivedTodos : []);

  const appContext = {
    taskTitle,
    setTaskTitle,
    taskDescription,
    setTaskDescription,
    todos,
    setTodos,
    completedTodos,
    setCompletedTodos,
    archivedTodos,
    setArchivedTodos
  }

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
      <AuthProvider>
        <AppGlobalContext.Provider value={appContext}>
          <BrowserRouter>
            {/* <Navbar /> */}
            <Routes>
              <Route path='/lka-todo' element={<Signup />} />
              <Route path='/lka-todo/login' element={<Login />} />
              <Route path='/lka-todo/todo' element={<Private />}>
                <Route path='/lka-todo/todo/all' element={<AllTask />} />
                <Route path='/lka-todo/todo/create' element={<AddTask />} />
                <Route path='/lka-todo/todo/completed' element={<CompletedTodos completedTodos={completedTodos} />} />
                <Route path='/lka-todo/todo/archived' element={<ArchivedTasks />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AppGlobalContext.Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
