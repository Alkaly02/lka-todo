import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    /* 
        disabled variable allows us to prevent the user 
        from adding more than once the user by clicking
        many times the submit button
    */
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const {signup} = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password.length < 6){
            setError('Password too short(at least 6 caracters)');
            return;
        }
        if(password !== confirmPassword){
            setError('Passwords must match');
            return;
        }

        try{
            setError('');
            setDisabled(true);
            await signup(email, password);
            navigate('/lka-todo/todo/all');
        }catch(err){
            if(err.code === 'auth/email-already-in-use'){
                setError('Email already in use')
            }
            if(err.code === 'auth/invalid-email'){
                setError('Invalid Email')
            }
        }

        setDisabled(false);
    }

  return (
    <div classNameName='container p-5'>
        <h1 className='text-center text-dark mt-5 pt-5' >Sign Up</h1>
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
            <div className="mb-3">
                <label for="confirmpassword" className="form-label">Confirm password</label>
                <input 
                type="password" 
                className="form-control" 
                id="confirmpassword" 
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <p>Already have an account ? <Link className='login-btn text-dark' to='/lka-todo/login'>Log In</Link></p>
            <button disabled={disabled} type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Signup