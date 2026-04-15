function Footer({
  babyName = 'Baby',
  eventName = 'Celebration',
  date = '19 April 2026',
  time = '01:00 PM',
  venue = 'bagdiya hause, bhagtpura',
  parentsName = 'Family',
  contactNumber = '9257479576',
  mapQuery = venue,
}) {
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
  const whatsappText = encodeURIComponent(`Namaste, ${babyName}'s ${eventName} invitation ke liye dhanyavaad.`);

  return (
    <footer className="footer-section">
      <h2>Thank You for Blessing {babyName}</h2>
      <p>With love, {parentsName}</p>
      <div className="footer-meta">
        <span>{eventName}</span>
        <span>•</span>
        <span>{date}</span>
        <span>•</span>
        <span>{time}</span>
      </div>
      <p>{venue}</p>
      <div className="footer-links">
        <a href={`tel:+91${contactNumber}`}>Call: +91 {contactNumber}</a>
        <a href={`https://wa.me/91${contactNumber}?text=${whatsappText}`} target="_blank" rel="noreferrer">WhatsApp</a>
        <a href={mapLink} target="_blank" rel="noreferrer">Location</a>
      </div>
    </footer>
  );
}

export default Footer;
