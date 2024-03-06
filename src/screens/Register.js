import React from 'react';

const Register = () => {
    function handleRegister (event) {
        event.preventDefault();
        console.log("Handle submit");
    }
    return (
        <div>
            <h2>Hello register form.</h2>
            <input type="email" placeholder='Enter email' />
            <button onClick={handleRegister}>Submit</button>
        </div>
    )
}
export default Register;