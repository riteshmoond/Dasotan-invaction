function Footer({
  babyName = 'Sanvi',
  eventName = 'Dasotan',
  date = '19 April 2026',
  time = '01:00 PM',
  venue = 'Bagdiya House, Bhagatpura',
  parentsName = 'Indraj & Pinky',
  contactNumber = '9257479576',
  mapQuery = venue,
}) {
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
  const whatsappText = encodeURIComponent(
    `Namaste 🙏 ${babyName} ke ${eventName} ke invitation ke liye dhanyavaad. Hum zaroor aayenge 💛`
  );

  return (
    <footer className="footer-section">

      <h2>Thank You for Your Love & Blessings 💛</h2>

      <p className="footer-message">
        Aapki upasthiti hamare liye sabse bada tohfa hai.  
        Hum aasha karte hain ki aap {babyName} ke is khaas din par zaroor shamil honge.
      </p>

      <p className="footer-family">With love, {parentsName}</p>

      <div className="footer-meta">
        <span>{eventName}</span>
        <span>•</span>
        <span>{date}</span>
        <span>•</span>
        <span>{time}</span>
      </div>

      <p className="footer-venue">📍 {venue}</p>

      <div className="footer-links">
        <a href={`tel:+91${contactNumber}`}>
          📞 Call: +91 {contactNumber}
        </a>

        <a
          href={`https://wa.me/91${contactNumber}?text=${whatsappText}`}
          target="_blank"
          rel="noreferrer"
        >
          💬 WhatsApp
        </a>

        <a href={mapLink} target="_blank" rel="noreferrer">
          📍 View Location
        </a>
      </div>

     <p className="footer-note">
  Made with 💛 by <span className="footer-name">Ritesh Chachu</span> ✨
</p>

    </footer>
  );
}

export default Footer;