import { useEffect, useState } from 'react';

const getTimeLeft = (eventDateTime) => {
  const difference = new Date(eventDateTime).getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isStarted: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isStarted: false,
  };
};

function Countdown({ babyName = 'gudu', eventName = 'Dasotan', eventDateTime }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(eventDateTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(eventDateTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDateTime]);

  const countdownItems = [
    ['Days', timeLeft.days],
    ['Hours', timeLeft.hours],
    ['Minutes', timeLeft.minutes],
    ['Seconds', timeLeft.seconds],
  ];

  return (
    <section className="section-shell countdown-section" id="countdown">
      <p className="eyebrow">Countdown</p>
      <h2>{babyName}'s {eventName} is almost here</h2>
      {timeLeft.isStarted ? (
        <p className="section-intro">Celebration ka time aa gaya hai. Aapka swagat hai!</p>
      ) : (
        <div className="countdown-grid">
          {countdownItems.map(([label, value]) => (
            <article className="countdown-card" key={label}>
              <strong>{String(value).padStart(2, '0')}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Countdown;
