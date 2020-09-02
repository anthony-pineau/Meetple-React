import React from 'react';
import { Link } from 'react-router-dom';
import FooterStyle from './FooterStyled';

const Footer = () => (
  <FooterStyle>
    <Link className="footer" to="/Mentions-legales">Mentions légales</Link>
    <Link className="footer" to="/A-propos">A Propos de Nous</Link>
  </FooterStyle>
);

export default Footer;
