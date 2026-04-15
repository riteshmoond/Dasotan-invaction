const moments = [
  { title: 'Sleepy Snuggles', color: 'peach', icon: '😴' },
  { title: 'Tiny Toes', color: 'mint', icon: '👣' },
  { title: 'Milk Time', color: 'blue', icon: '🍼' },
  { title: 'Sweet Yawns', color: 'yellow', icon: '🥱' },
  { title: 'Little Stretch', color: 'pink', icon: '🤲' },
  { title: 'Cuddle Time', color: 'lilac', icon: '👶' },
];

function Gallery() {
  return (
    <section className="section-shell gallery-section" id="gallery">
      <p className="eyebrow">Baby moments</p>
      <h2>A Gallery of Little Joys</h2>
      <p className="section-intro">
  A glimpse of our little one's first month filled with love, warmth, and tiny magical moments.
</p>
      <div className="gallery-grid">
        {moments.map((moment) => (
          <article className={`gallery-card ${moment.color}`} key={moment.title}>
            <span aria-hidden="true">{moment.icon}</span>
            <h3>{moment.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
