import Evento from "../componentes/Evento";
import "../styles/home.css";

function Home() {
  return (
    <main>
      <div className="Home">
        <h1>Bem vindo ao Gerenciador de Eventos</h1>
        <p> Aqui você fica por dentro dos eventos.</p>

        {/* Exibindo os eventos */}
        <div className="quadradoE">
          <Evento nome="Natal" data="25/12/2025" local="Ceia" />
        </div>
        <div className="quadradoE">
          <Evento nome="Aniversário Sangiogo" data="14/04/2026" local="Chapecó" />
        </div>
        <div className="quadradoE">
          <Evento nome="Aniversário Luis" data="22/11/2026" local="Chapecó" />
        </div>
        <div className="quadradoE">
          <Evento nome="Aniversário Ana" data="21/04/2026" local="Chapecó" />
        </div>
        <div className="quadradoE">
          <Evento nome="Aniversário Luan" data="24/07/2026" local="Chapecó" />
        </div>
      </div>
    </main>
  );
}
export default Home;