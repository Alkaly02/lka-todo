import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'
import Navbar from '../Navbar';

const Private = () => {
    const {currentUser} = useContext(UserContext);

    if(!currentUser){
        return <Navigate to="/lka-todo"></Navigate>
    }
  return (
    <>
        {currentUser.email}
        <Navbar />
        <Outlet />
    </>
  )
}

export default Private