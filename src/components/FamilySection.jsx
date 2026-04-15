function FamilySection({ babyName = 'gudu', eventName = 'Dasotan', parentsName = 'indraj & pinky' }) {
  return (
    <section className="section-shell family-section" id="family">
      <div className="family-card">
        <p className="eyebrow">With love</p>
        <h2>{parentsName}</h2>
        <p>
          Apne pyare {babyName} ke {eventName} par aapko dil se invite karte hain.
          Aapka aashirwad hamare little star ke liye sabse bada gift hoga.
        </p>
      </div>
      <div className="family-blessing-card" aria-hidden="true">
        <span>👨‍👩‍👦</span>
        <strong>Family, blessings & happy memories</strong>
      </div>
    </section>
  );
}

export default FamilySection;
