import React from "react";
import "./Footer.css"; // archivo CSS externo para estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Todo es Posible</p>
        <nav>
          <a href="#">Inicio</a> | <a href="#">Contacto</a> | <a href="#">Términos</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
