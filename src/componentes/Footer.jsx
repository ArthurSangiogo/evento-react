import "../styles/footer.css";
function Footer() {
  // Função que retorna o ano atual
  const ano = new Date().getFullYear();

  return (
    <footer>
      <p> Todos os direitos reservados ALLA©  {ano} </p>
    </footer>
  );
}

export default Footer;
