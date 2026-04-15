function FamilySection({
  babyName = 'Sanvi',
  eventName = 'Dasotan',
  parentsName = 'Indraj & Pinky',
}) {
  return (
    <section className="section-shell family-section" id="family">
      
      <div className="family-card">
        <p className="eyebrow">With Love & Blessings</p>

        <h2>{parentsName}</h2>

        <p className="family-message">
          Hamare ghar mein khushiyon ka ek naya sitara aaya hai 💫  
          Aur ab {babyName} ke {eventName} ke is pyaare mauke par,  
          hum aapko dil se amantrit karte hain.
        </p>

        <p className="family-subtext">
          Aapki upasthiti aur aashirwad hamare little star ke liye  
          sabse bada tohfa hoga 💛
        </p>
      </div>

      <div className="family-blessing-card" aria-hidden="true">
        <span className="family-icon">👨‍👩‍👦</span>

        <strong>
          Together with love, laughter & countless blessings
        </strong>

        <p>
          Celebrating the beginning of a beautiful journey
        </p>
      </div>

    </section>
  );
}

export default FamilySection;