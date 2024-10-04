import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";

import "./login.css";

const login = () => {
  const [username, setUsername] = useState("");
  const [passowrd, setPassowrd] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Enviando os dados: ${username} - ${passowrd}`);
  };

  return (
    <div className="container">
      <h1>Acesse o sistema</h1>

      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="email"
            placeholder="Digite seu e-mail"
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassowrd(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="reacll-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim?
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>

        <button>Entrar</button>

        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default login;
