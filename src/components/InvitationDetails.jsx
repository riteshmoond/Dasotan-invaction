function InvitationDetails({
  babyName = 'Baby',
  eventName = 'Celebration',
  date = 'Date coming soon',
  time = 'Time coming soon',
  venue = 'Venue coming soon',
  contactNumbers = ['9024443290'],
  mapQuery = venue,
}) {
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
  const rsvpMessage = encodeURIComponent(
    `Namaste 🙏  
Humein ${babyName} ke ${eventName} ka pyaara sa invitation mila, dil se dhanyavaad 💛  

Hum is khubsurat mauke par shamil hone ke liye bahut excited hain.  
Chhote se little star ko humari taraf se dher saara pyaar, aashirwad aur best wishes ✨👶  

Bhagwan kare ${babyName} hamesha khush rahe, swasth rahe aur apni pyari muskaan se sabka dil jeetta rahe 😊  

Milte hain jaldi hi celebration mein 🎉`
  );
  const primaryNumber = contactNumbers[0];

  return (
    <section className="section-shell invitation-section" id="invitation">
      <div>
        <p className="eyebrow">Invitation details</p>
        <h2>{babyName}'s {eventName}</h2>
        <p className="section-intro">
          Aapki blessings aur pyaari si presence se hamara ye special din aur bhi yaadgaar ban jayega.
        </p>
      </div>

      <div className="details-grid">
        <article className="detail-card">
          <span>📅</span>
          <h3>Date</h3>
          <p>{date}</p>
        </article>
        <article className="detail-card">
          <span>⏰</span>
          <h3>Time</h3>
          <p>{time}</p>
        </article>
        <article className="detail-card">
          <span>📍</span>
          <h3>Venue</h3>
          <p>{venue}</p>
        </article>
      </div>

      <div className="invitation-actions">
        <a className="secondary-button" href={mapLink} target="_blank" rel="noreferrer">
          Open Location
        </a>
        {contactNumbers.map((number, index) => (
          <a className="secondary-button" href={`tel:+91${number}`} key={number}>
            Call {index + 1}: +91 {number}
          </a>
        ))}
      </div>

      <div className="rsvp-card enhanced-rsvp-card simple-rsvp-card">
        <div>
          <h3>RSVP on WhatsApp</h3>
          <p>Aap apni attendance confirm karne ke liye WhatsApp par RSVP bhej sakte hain. Hum aapke response ka intezaar kar rahe hain! Aapke pyaar aur support ke liye shukriya.</p>
        </div>
        <a
          className="primary-button"
          href={`https://wa.me/91${primaryNumber}?text=${rsvpMessage}`}
          target="_blank"
          rel="noreferrer"
        >
          Send RSVP on WhatsApp
        </a>
      </div>
    </section>
  );
}

export default InvitationDetails;
