import React from 'react';
import FooterInfo from '../footerSection/FooterInfo';
import SocialLinks from '../footerSection/SocialLinks';
import LegalFooter from '../footerSection/LegalFooter';


const Footer = () => {
  
  return (
    <footer className="footerdos"  id="footer">
      <section className="footerInfo">
        <FooterInfo />
        <SocialLinks />
      </section>
      <LegalFooter />
    </footer>
  );
};

export default Footer;