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
      <Link to="/"> Início </Link> |  <Link to="/cadastrar"> Cadastrar </Link>  |  <Link to="/login"> Login</Link> | <Link to="/sobre"> Sobre </Link> {" "} 
      </nav>
    </header>
    </div>
  );
}

export default Header;
