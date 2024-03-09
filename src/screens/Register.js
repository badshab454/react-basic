import React from 'react';

const Register = () => {
    function handleRegister (event) {
        event.preventDefault();
        console.log("Handle submit");
    }
    let age = 12;
    return (
        <form>
            {age > 17 ? (
                <div>
                 <input type="email" placeholder='Enter email' />
                 <button onClick={handleRegister}>Submit</button>
            
                </div>) : (
                    <h2>Picchi Sala </h2>
                )}
        </form>
    )
}
export default Register;