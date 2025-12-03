import React from 'react';
import '../styles/Login.css'; // Importa os estilos CSS

// Importa ícones do Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
// Note: faTwitter é o ícone do Twitter, que agora é X.
import { faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

// URL da imagem da logo (você precisa garantir que 'fiesc-logo.png' esteja no local correto no seu projeto)

const Login = () => {
    // Funções para lidar com o login (seriam implementadas aqui)
    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de autenticação
        console.log('Formulário enviado!');
    };

    return (
        <div className="login-page"> {/* Fundo escuro */}
            <div className="login-container"> {/* Cartão de login */}
                
                {/* Título 'Login' no topo */}
                <h1 className="login-title">Login</h1>

                {/* Formulário de Login */}
                <form className="login-form" onSubmit={handleSubmit}>
                    
                    {/* Input Usuário */}
                    <div className="input-group">
                        <FontAwesomeIcon icon={faUser} />
                        <input type="text" placeholder="Usuário" required />
                    </div>

                    {/* Input Senha */}
                    <div className="input-group">
                        <FontAwesomeIcon icon={faLock} />
                        <input type="password" placeholder="Senha" required />
                    </div>

                    {/* Botão Acessar */}
                    <button type="submit" className="access-button">Acessar</button>
                </form>

                {/* Separador e Opções Sociais */}
                <p className="separator-text">OU</p>
                <p className="continue-text">Continuo com</p>
                
                <div className="social-login">
                    {/* Link para o Google - Abre em nova aba */}
                    <a 
                        href="https://www.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Login com Google"
                    >
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    
                    {/* Link para o Instagram - Abre em nova aba */}
                    <a 
                        href="https://www.instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Login com Instagram"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    
                    {/* Link para o X (Twitter) - Abre em nova aba */}
                    <a 
                        href="https://www.x.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Login com X (Twitter)"
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>

                {/* Link de Cadastro */}
                <p className="signup-text">
                    Não tem uma conta? <a href="#" className="signup-link">Cadastre-se</a> - <span className="fiesc-conect">FIESCConect</span>
                </p>
                {/* Logo FIESC */}
                <img src="https://empbraatsstorage.blob.core.windows.net/atslogos/1a0a910c-a594-4210-8147-5a03434d8cc6_4.png" alt="Logo da FIESC" className="logo-fiesc" />
            </div>
        </div>
    );
};

export default Login;