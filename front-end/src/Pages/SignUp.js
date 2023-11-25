import React from 'react'
import { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';


function SignUp() {
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
            // alert("Congratulations")
          navigate('/');
        }
      }, [user]);
  
  return (
    <div>
    
    <form action="login.php" method="POST">
            <h2>Sign Up with Email </h2>
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
        {/* <button><a class="uk-button uk-button-default" href="/">Back</a></button> */}
        <br />
        <h1>OR</h1>
        <div className='max-w-[240px] m-auto py-4'>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  )
}

export default SignUp


