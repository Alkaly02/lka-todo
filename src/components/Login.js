import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    /* 
        disabled variable allows us to prevent the user 
        from adding more than once the user by clicking
        many times the submit button
    */
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const {login} = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            setError('');
            setDisabled(true);
            await login(email, password);
            navigate('/lka-todo/todo/all');
        }catch{
            setError('Email or password incorrect')
        }

        setDisabled(false);
    }

  return (
    <div classNameName='container p-5'>
        <h1 className='text-center text-dark mt-5 pt-5' >Log In</h1>
        <form onSubmit={handleSubmit} className='p-4' style={{maxWidth: '500px', margin: 'auto'}}>
            {
               error && <div className="text-center text-light bg-danger opacity-75 mb-3 p-3">
                            {error}
                        </div>
            }
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input 
                type="email" 
                className="form-control" 
                id="email" 
                aria-describedby="emailHelp"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input 
                type="password" 
                className="form-control"
                id="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <p>Don't have an account ? <Link className='signup-btn text-dark' to='/lka-todo'>Sign Up</Link></p>
            <button disabled={disabled} type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Login;