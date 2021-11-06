import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { JwtHandler } from "../../jwt-handler/JwtHandler";
import xboxlogo4 from "../../assets/images/xboxlogo4.png";
import "./Header.css";

export default function Header(props) {
  const [isLogged, setIsLogged] = useState(JwtHandler.isJwtValid);

  useEffect(() => {
    const handleOnJwtChange = () => {
      setIsLogged(JwtHandler.isJwtValid());
    };

    window.addEventListener("onJwtChange", handleOnJwtChange);

    // Função de limpeza
    return () => {
      window.removeEventListener("onJwtChange", handleOnJwtChange);
    };
  }, []);

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={xboxlogo4} alt="X-BoxLive" />
      </Link>
      <br />
      <Link to="/">Home</Link>
      <br />

      <Link to="/add">Add</Link>
      <br />

      <Link to="/view">View</Link>
      <br />

      {/* <Link to="/add">Configurações</Link>
      <br /> */}

      {/* <Link to="/genre/view/all">Gênero</Link>      
      <br /> */}

      {/* <Link to="/user/list">Usuários</Link>
      <br /> */}

      {isLogged ? (
        <Link to="/logout">Logout</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <br />
      <br />
    </header>
  );
}
