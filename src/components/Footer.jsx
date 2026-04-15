function Footer({
  babyName = 'Sanvi',
  eventName = 'Dasotan',
  date = '19 April 2026',
  time = '01:00 PM',
  venue = 'Bagdiya House, Bhagatpura',
  parentsName = 'Indraj & Pinky',
  contactNumbers = ['9024443290'],
  mapQuery = venue,
  mapLink,
}) {
  const locationLink = mapLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
  const whatsappText = encodeURIComponent(
    `Namaste 🙏 ${babyName} ke ${eventName} ke invitation ke liye dhanyavaad. Hum zaroor aayenge 💛`
  );

  return (
    <footer className="footer-section">
      <h2>Thank You for Your Love & Blessings 💛</h2>

      <p className="footer-message">
        Aapki upasthiti hamare liye sabse bada tohfa hai. Hum aasha karte hain ki aap {babyName} ke is khaas din par zaroor shamil honge.
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
        {contactNumbers.map((number, index) => (
          <a href={`tel:+91${number}`} key={`call-${number}`}>
            📞 Call {index + 1}: +91 {number}
          </a>
        ))}

        {contactNumbers.map((number, index) => (
          <a
            href={`https://wa.me/91${number}?text=${whatsappText}`}
            target="_blank"
            rel="noreferrer"
            key={`whatsapp-${number}`}
          >
            💬 WhatsApp {index + 1}
          </a>
        ))}

        <a href={locationLink} target="_blank" rel="noreferrer">
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



