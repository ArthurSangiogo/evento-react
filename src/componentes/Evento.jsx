// Props são dados que você pode color no html para passar valores para o js
// Como fazemos com title, alt, src, etc...

// Cria a função Eventos recenbo os valores de prop
function Eventos(props) {
  return (
    // Cria um div para conter o código html, necessário já que react não importa
    // vários componentes html
    <div className = "evento">
      {/*Recebe o que foi colocado no nome e coloca como o titulo*/}
      <h3>{props.nome}</h3>
      {/*Recebe o que foi colocado na data e coloca como a data*/}
      <p>Data: {props.data}</p>
      {/*Recebe o que foi colocado no local e coloca como o local*/}
      <p>Local: {props.local}</p>
    </div>
  );
}

// Exporta o componente para poder o usar fora deste arquivo
export default Eventos;
