import babyPhoto from '../assets/sanvi.jpeg';
import babyPhoto2 from '../assets/sanvi-2.jpeg';

const galleryPhotos = [
  { src: babyPhoto, title: 'Sweet Smile', color: 'peach' },
  { src: babyPhoto2, title: 'Little Star', color: 'mint' },
  { src: babyPhoto, title: 'Tiny Blessing', color: 'blue' },
  { src: babyPhoto2, title: 'Cute Moment', color: 'yellow' },
  { src: babyPhoto, title: 'Family Joy', color: 'pink' },
  { src: babyPhoto2, title: 'Sanvi Love', color: 'lilac' },
];

function Gallery() {
  return (
    <section className="section-shell gallery-section" id="gallery">
      <p className="eyebrow">Baby moments</p>
      <h2>A Gallery of Sweet Memories</h2>
      <p className="section-intro">
        Sanvi ki pyaari photo moments jo humesha hamare dil ko khush karte hain. Har photo ek chhoti si kahani batati hai, ek chhota sa pal jo humein hamesha yaad rahega.
      </p>
      <div className="gallery-grid photo-gallery-grid">
        {galleryPhotos.map((photo) => (
          <article className={`gallery-card photo-gallery-card ${photo.color}`} key={photo.title}>
            <img src={photo.src} alt={photo.title} />
            <h3>{photo.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
