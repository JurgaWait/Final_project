import React, { useState } from "react";
import './App.css';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { ClientForm } from "./components/ClientForm";
import { ClientList } from "./components/ClientList";
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <Routes>
      <Route element={<Login />} path="/"/>
      <Route element={<Register />} path="/register"/>
      <Route element={<ClientForm />} path="/form"/>
      <Route element={<ClientList />} path="/list"/>
    </Routes>

  );
}

export default App;
