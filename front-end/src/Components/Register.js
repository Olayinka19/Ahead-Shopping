import React from 'react'

function Register() {
  return (
    <div>

<div class="container">
        <form action="register.php" method="POST">
            <h2>Register</h2>
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
            <div class="input-container">
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" required />
            </div>
            <br />
            <button type="submit">Register</button>
            <p>Already have an account? <a href="Signin">Login</a></p>
        </form>
        {/* <button><a class="uk-button uk-button-default" href="/">Back</a></button> */}
    </div>


    </div>
  )
}

export default Register