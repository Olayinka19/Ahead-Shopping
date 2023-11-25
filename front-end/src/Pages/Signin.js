
import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
// import { UserAuth } from '../context/AuthContext';
import { UserAuth } from '../Context/AuthContext';
import SignUp from './SignUp'
import { useNavigate } from 'react-router-dom';
import Register from '../Components/Register';

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/SignUp');
    }
  }, [user]);

  return (
    <div>
        <form action="login.php" method="POST">
            <h2>Login</h2>
            <div class="input-container">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required />
            </div>
            <br />
            <div class="input-container">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required />
            </div>
            <br />
            <button type="submit">Login</button>
            <p>Don't have an account? <a href="/Register">Register</a></p>
        </form>
      <h1 className='text-center text-3xl font-bold py-8'>Sign in</h1>
      <div className='max-w-[240px] m-auto py-4'>
        <GoogleButton onClick={handleGoogleSignIn} />
        <button><a class="uk-button uk-button-default" href="/">Back</a></button>
      </div>
    </div>
  );
};

export default Signin;