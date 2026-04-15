const milestones = [
  {
    icon: '🌙',
    date: '18 March 2026',
    title: 'A Star Arrived',
    text: 'Our home was filled with the softest cry and endless happiness.',
  },
  {
    icon: '🍼',
    date: 'First Month',
    title: 'One Month of Love',
    text: '30 days of cuddles, sleepless nights, and unconditional love.',
  },
  {
    icon: '😴',
    date: 'Every Night',
    title: 'Peaceful Dreams',
    text: 'Sleeping like a little angel, making our world calm and beautiful.',
  },
  {
    icon: '👶',
    date: 'Everyday',
    title: 'Tiny Expressions',
    text: 'Those little expressions and movements melt our hearts every single day.',
  },
];

function Timeline() {
  return (
    <section className="section-shell timeline-section" id="timeline">
      <p className="eyebrow">Story timeline</p>
      <h2>Little Milestones, Big Memories</h2>
      <div className="timeline-list">
        {milestones.map((milestone) => (
          <article className="timeline-card" key={milestone.title}>
            <div className="timeline-icon" aria-hidden="true">{milestone.icon}</div>
            <div>
              <span>{milestone.date}</span>
              <h3>{milestone.title}</h3>
              <p>{milestone.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
