import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ClientForm = (props) => { 
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    return (
        <div className="reg-form-container">
            <h2>Naujas dalyvis</h2>
        <form className="client_register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">vardas:</label>
            <input value={name} onChange={(e) => setName(e.target.value)}
            type="name" placeholder="vardas" id="name" name="name" />
            <label htmlFor="surname">pavardė:</label>
            <input value={surname} onChange={(e) => setSurname(e.target.value)}
            type="surname" placeholder="pavardė" id="surname" name="surname" />
            <label htmlFor="email">elektroninis paštas:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}
            type="email" placeholder="įrašykite el. pašto adresą" id="email" name="email" />
            <label htmlFor="phone">telefono numeris::</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)}
            type="phone" placeholder="+370" id="phone" name="phone" />
            <button className="form-btn" type="submit" onClick={() => navigate("/list")}>Registruoti</button>
        </form>
    </div>
    )
    }