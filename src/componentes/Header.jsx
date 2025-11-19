// cabeçalho
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <div className="header-container">
    <header>
      <h2> Sistema Gerenciador de Eventos SENAI</h2>
      <nav>
      <Link to="/">Início</Link> | <Link to="/sobre">Sobre</Link> {" "} | <Link to="/cadastrar">Cadastrar Evento</Link>
      </nav>
    </header>
    </div>
  );
}

export default Header;