// cabeçalho
import { Link } from "react-router-dom";
import "../styles/header.css";
import { faCircleXmark, faColumns } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header-container">
    <header>
      <h2> Sistema Gerenciador de Eventos SENAI</h2>
      <nav>
    <Link className="botao-menu" to="/">Início</Link>
    <Link className="botao-menu" to="/cadastrar">Cadastrar</Link>
    <Link className="botao-menu" to="/login">Login</Link>
    <Link className="botao-menu" to="/sobre">Sobre</Link>
</nav>

    </header>
    </div>
  );
}

export default Header;
