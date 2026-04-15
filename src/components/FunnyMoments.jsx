import sanviVideo1 from '../assets/sanvi video-1.mp4';
import sanviVideo2 from '../assets/sanvi video-2.mp4';
import sanviVideo3 from '../assets/sanvi video-3.mp4';
import sanviVideo4 from '../assets/sanvi video-4.mp4';
import sanviVideo5 from '../assets/sanvi video-5.mp4';

const funnyMoments = [
  {
    title: 'Little Movements',
    video: sanviVideo1,
  },
  {
    title: 'Sweet Expressions',
    video: sanviVideo2,
  },
  {
    title: 'Peaceful Moments',
    video: sanviVideo3,
  },
  {
    title: 'Tiny Stretch',
    video: sanviVideo4,
  },
  {
    title: 'Cute Welcome',
    video: sanviVideo5,
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
        Sanvi ke pehle mahine ke kuch pyaare aur yaadgaar pal. Har chhoti si movement aur expression hamare liye ek special memory ban gayi hai.
      </p>

      <div className="funny-grid">
        {funnyMoments.map((moment) => (
          <article className="funny-card" key={moment.title}>
            <video
              controls
              muted
              playsInline
              preload="metadata"
              poster={moment.poster}
              onLoadedMetadata={keepVideoMuted}
              onVolumeChange={keepVideoMuted}
            >
              <source src={moment.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

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
