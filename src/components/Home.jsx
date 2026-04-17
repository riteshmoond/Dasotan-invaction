import babyPhoto from '../assets/sanvi.jpeg';

const floatingItems = [
  { label: 'cloud', symbol: '☁', className: 'float-cloud float-one' },
  { label: 'star', symbol: '★', className: 'float-star float-two' },
  { label: 'balloon', symbol: '○', className: 'float-balloon float-three' },
  { label: 'moon', symbol: '☾', className: 'float-moon float-four' },
];

function Home({ babyName = 'Baby', eventName = 'First Month Celebration' }) {
  return (
    <section className="home-section section-shell" id="home">
      <div className="floating-sky" aria-hidden="true">
        {floatingItems.map((item) => (
          <span key={item.label} className={item.className}>
            {item.symbol}
          </span>
        ))}
      </div>

      <div className="home-copy">
        <p className="eyebrow">Sanvi Ke 30 Din: Full On Masti & Pyaar!</p>

        <h1>
          Swagat hai <span className="highlight">{babyName}</span> ki First Month Party mein!
        </h1>

        <p className="home-message">
          Arre arre! Hamari choti si Sanvi ne apne zindagi ke pehle 30 din <b>full swag</b> ke saath complete kar liye hain!<br/>
          Aap sabhi ko invite karte hain ek <b>dhamakedaar Dasotan party</b> mein – jahan pyaar bhi milega, blessings bhi, aur cuddles toh unlimited hain!<br/>
          Milke celebrate karte hain Sanvi ki cuteness, uski naughty smiles, aur woh sab funny moments jo humesha yaad rahenge.<br/>
          <span style={{color: '#e67e22'}}>Mummy-Papa ki taraf se – “Warning: Overload of sweetness ho sakta hai!” 😄</span>
        </p>

        <div className="home-actions">
          <a className="primary-button" href="#invitation">View Invitation</a>
          <a className="secondary-button" href="#wishes">Send Wishes</a>
        </div>
      </div>

      <div className="nursery-card" aria-label={`${babyName}'s cute invitation photo`}>
        <div className="sun-dot" />

        <div className="baby-photo-frame">
          <img src={babyPhoto} alt={babyName} className="baby-photo" />
        </div>

        <div className="crib">
          <span>🍼</span>
          <span>😴</span>
          <span>👶</span>
        </div>

        <p>
          30 din ki masti, choti smiles, aur abhi toh party shuru hui hai!
        </p>
      </div>
    </section>
  );
}

export default Home;
