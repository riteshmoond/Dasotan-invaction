function InvitationDetails({
  babyName = 'Baby',
  eventName = 'Celebration',
  date = 'Date coming soon',
  time = 'Time coming soon',
  venue = 'Venue coming soon',
  rsvpNumber = '9257479576',
}) {
  const whatsappMessage = encodeURIComponent(
    `Namaste, hum ${babyName} ke ${eventName} mein zaroor aayenge!`
  );

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

      <div className="rsvp-card">
        <div>
          <h3>RSVP with one tap</h3>
          <p>Bas ek message bhej dijiye, hum aapka intezar khushi se karenge.</p>
        </div>
        <a
          className="primary-button"
          href={`https://wa.me/91${rsvpNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
        >
          RSVP on WhatsApp
        </a>
      </div>
    </section>
  );
}

export default InvitationDetails;
