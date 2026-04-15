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
        <p className="eyebrow">One Month of Pure Love</p>

        <h1>
          Welcome to <span className="highlight">{babyName}</span>'s First Month Celebration
        </h1>

        <p className="home-message">
          Our little bundle of joy has completed one beautiful month.
          Join us to celebrate {babyName}'s {eventName} filled with love,
          blessings, cuddles, and the sweetest little moments.
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
          30 days of love, tiny smiles, and a lifetime of happiness has just begun.
        </p>
      </div>
    </section>
  );
}

export default Home;
