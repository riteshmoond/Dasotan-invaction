import guduPhoto from '../assets/gudu.jpeg';

const moments = [
  { title: 'Sweet Smile', color: 'peach' },
  { title: 'Little Star', color: 'mint' },
  { title: 'Tiny Blessing', color: 'blue' },
  { title: 'Cute Moment', color: 'yellow' },
  { title: 'Family Joy', color: 'pink' },
  { title: 'Gudu Love', color: 'lilac' },
];

function Gallery() {
  return (
    <section className="section-shell gallery-section" id="gallery">
      <p className="eyebrow">Baby moments</p>
      <h2>A Gallery of Sweet Memories</h2>
      <p className="section-intro">
        Gudu ki pyaari photo moments jo humesha hamare dil ko khush karte hain. Har photo ek chhoti si kahani batati hai, ek chhota sa pal jo humein hamesha yaad rahega.
      </p>
      <div className="gallery-grid photo-gallery-grid">
        {moments.map((moment) => (
          <article className={`gallery-card photo-gallery-card ${moment.color}`} key={moment.title}>
            <img src={guduPhoto} alt={moment.title} />
            <h3>{moment.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
