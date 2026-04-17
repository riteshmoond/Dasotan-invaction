import sanviVideo1 from '../assets/sanvi video-1.mp4';
import sanviVideo2 from '../assets/sanvi video-2.mp4';
import sanviVideo3 from '../assets/sanvi video-3.mp4';
import sanviVideo4 from '../assets/sanvi video-4.mp4';
import sanviVideo5 from '../assets/sanvi video-5.mp4';

const funnyMoments = [
  {
    title: 'Little Movements',
    video: sanviVideo1,
    caption: 'Sanvi ke chhote chhote moves, aur sabke faces par instant smile.',
  },
  {
    title: 'Sweet Expressions',
    video: sanviVideo2,
    caption: 'Kabhi serious, kabhi cute - har expression ek memory ban gaya.',
  },
  {
    title: 'Peaceful Moments',
    video: sanviVideo3,
    caption: 'Soft si shanti, baby wali innocence, aur ghar bhar ka pyaar.',
  },
  {
    title: 'Tiny Stretch',
    video: sanviVideo4,
    caption: 'Ek tiny stretch aur poori family ka dil melt.',
  },
  {
    title: 'Cute Welcome',
    video: sanviVideo5,
    caption: 'Sanvi ka cute welcome moment, bilkul celebration jaisa.',
  },
];

function keepVideoMuted(event) {
  event.currentTarget.muted = true;
  event.currentTarget.volume = 0;
}

function FunnyMoments() {
  return (
    <section className="section-shell funny-section" id="funny-moments">
      <p className="eyebrow">Little Magical Moments</p>

      <h2>Sanvi's First Month Highlights</h2>

      <p className="section-intro">
        Kuch pal itne cute hote hain ki unhe baar baar dekhne ka mann karta hai.
        Yeh Sanvi ke wahi tiny, funny aur heart-melting moments hain.
      </p>

      <div className="funny-grid">
        {funnyMoments.map((moment, index) => (
          <article className="funny-card" key={moment.title}>
            <div className="video-frame">
              <span className="video-badge">Clip {index + 1}</span>
            <video
              controls
              muted
              playsInline
              preload="metadata"
              onLoadedMetadata={keepVideoMuted}
              onVolumeChange={keepVideoMuted}
            >
              <source src={moment.video} type="video/mp4" />
            </video>
            </div>

            <div className="funny-card-copy">
              <h3>{moment.title}</h3>
              <p>{moment.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FunnyMoments;
