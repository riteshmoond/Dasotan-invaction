const schedule = [
  { time: '01:00 PM', title: 'Guest Welcome', note: 'Pyaar bhara swagat aur family greetings.' },
  { time: '01:30 PM', title: 'Dasotan Ceremony', note: 'Blessings and traditional ceremony for gudu.' },
  { time: '02:30 PM', title: 'Lunch', note: 'Family ke saath tasty lunch and sweet moments.' },
  { time: '03:30 PM', title: 'Photos & Wishes', note: 'Memories, photos, wishes aur lots of smiles.' },
];

function ProgramSchedule() {
  return (
    <section className="section-shell schedule-section" id="schedule">
      <p className="eyebrow">Event program</p>
      <h2>Celebration Schedule</h2>
      <div className="schedule-list">
        {schedule.map((item) => (
          <article className="schedule-card" key={item.title}>
            <time>{item.time}</time>
            <div>
              <h3>{item.title}</h3>
              <p>{item.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProgramSchedule;
