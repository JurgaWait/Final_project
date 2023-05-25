import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthenticationContext } from "./AutenticationContext";
import axios from "axios";

export const Login = (props) => { 
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    // const { setIsSignedIn } = useContext(AuthenticationContext);
    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: ''
    // });
    // const [error, setError] = useState(null);
      
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
//     axios.post("http://localhost:5000/login", formData)
//     .then((response) => {
//       if (response.data.token) {
//         localStorage.setItem('token', response.data.token);
//         setIsSignedIn(true);
//         navigate('/');
//       } else {
//         setError(response.data.message);
//       }
//     })
//     .catch((err) => console.log(err));
//   }

    return (
        <div className="auth-form-container">
            <h2>Prisijungimas</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">elektroninis paštas:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}
            type="email" placeholder="įrašykite el. pašto adresą" id="email" name="email" />
            <label htmlFor="password">slaptažodis:</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}
            type="password" placeholder="********" id="password" name="password" />
            <button className="form-btn" onClick={() => navigate("/form")}>Prisijungti</button>
        </form>
        <button className="link-btn" onClick={() => navigate("/register")}>Neturite paskyros? Prisiregistruokite čia.</button>
    </div>
    )
};
