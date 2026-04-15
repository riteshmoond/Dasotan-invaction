import babyPhoto from '../assets/sanvi.jpeg';
import babyPhoto2 from '../assets/sanvi-2.jpeg';

const galleryPhotos = [
  { src: babyPhoto, title: 'Peaceful Sleep', color: 'peach' },
  { src: babyPhoto2, title: 'Tiny Blessing', color: 'mint' },
  { src: babyPhoto, title: 'Cuddle Time', color: 'blue' },
  { src: babyPhoto2, title: 'Sweet Expressions', color: 'yellow' },
  { src: babyPhoto, title: 'Little Angel', color: 'pink' },
  { src: babyPhoto2, title: 'One Month of Love', color: 'lilac' },
];

function Gallery() {
  return (
    <section className="section-shell gallery-section" id="gallery">
      
      <p className="eyebrow">Our Little Princess</p>

      <h2>Sanvi’s First Month Memories</h2>

      <p className="section-intro">
        Har din ek nayi khushi, har pal ek nayi muskaan 💛  
        Yeh kuch pyaare lamhe hain jo hamare dil ke sabse kareeb hain.  
        Sanvi ke saath bitaye hue yeh pehle 30 din humesha yaad rahenge.
      </p>

      <div className="gallery-grid photo-gallery-grid">
        {galleryPhotos.map((photo) => (
          <article
            className={`gallery-card photo-gallery-card ${photo.color}`}
            key={photo.title}
          >
            <div className="image-wrapper">
              <img src={photo.src} alt={photo.title} />
            </div>

            <h3>{photo.title}</h3>
          </article>
        ))}
      </div>

    </section>
  );
}

export default Gallery;