import { useNavigate } from "react-router-dom";


export const Navbar = () => { 
    const navigate = useNavigate();

    return (
    <div className="navbar-container">
        <nav id="menu-links">
        <a href="/">Prisijungti </a>
        <a href="/register">Užsiregistruoti</a>
        <a href="/form">Naujas dalyvis</a>
        <a href="/list">Dalyvių sąrašas</a>
        <button className="form-btn" type="submit" onClick={() => navigate("/")}>Atsijungti</button>
        </nav>
    </div>
)}
