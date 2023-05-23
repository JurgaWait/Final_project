import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = (props) => { 
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    return (
        <div className="auth-form-container">
            <h2>Registracija</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="email">elektroninis paštas:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}
            type="email" placeholder="įrašykite el. pašto adresą" id="email" name="email" />
            <label htmlFor="name">vardas:</label>
            <input value={name} onChange={(e) => setName(e.target.value)}
            type="name" placeholder="vardas" id="name" name="name" />
            <label htmlFor="surname">pavardė:</label>
            <input value={surname} onChange={(e) => setSurname(e.target.value)}
            type="surname" placeholder="pavardė" id="surname" name="surname" />
            <label htmlFor="password">slaptažodis:</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}
            type="password" placeholder="********" id="password" name="password" />
            <button className="form-btn" onClick={() => navigate("/form")}>Prisijungti</button>
        </form>
        <button className="link-btn" onClick={() => navigate("/")}>Turite paskyrą? Prisijunkite čia.</button>
    </div>
    )
}