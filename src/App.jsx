import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import "./styles/styles.css";
import "./styles/cadastroEvento.css";
import CadastroEvento from "./paginas/CadastroEventos";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />


        {/* Menu de navegação */}
      

        {/* Definição das rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cadastrar" element={<CadastroEvento />} />  
        </Routes>


        <Footer />
      </div>
    </Router>
  );
}
export default App;