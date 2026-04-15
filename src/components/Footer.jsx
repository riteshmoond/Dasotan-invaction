function Footer({ babyName = 'Baby', parentsName = 'Family', contactNumber = '9257479576' }) {
  return (
    <footer className="footer-section">
      <h2>Thank You for Blessing {babyName}</h2>
      <p>With love, {parentsName}</p>
      <div className="footer-links">
        <a href={`tel:+91${contactNumber}`}>Contact: +91 {contactNumber}</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
      </div>
    </footer>
  );
}

export default Footer;
