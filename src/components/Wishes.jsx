import { useEffect, useState } from 'react';

const wishesStorageKey = 'gudu-dasotan-wishes';

const starterWishes = [
  { name: 'Nani & Nana', message: 'May your days always be full of laughter and love.' },
  { name: 'bhuaa & fhufha ', message: 'Wishing you a lifetime of happiness and success.' },
  { name: 'Parents', message: 'Congratulations on the arrival of your precious little one!' },
  { name: 'Family Friends', message: 'Blessings for a bright, beautiful, and joyful life.' },
];

const getWishKey = (wish) => `${wish.name.trim().toLowerCase()}-${wish.message.trim().toLowerCase()}`;

const mergeWishes = (savedWishes = []) => {
  const wishesByKey = new Map();

  [...savedWishes, ...starterWishes].forEach((wish) => {
    if (!wish?.name || !wish?.message) return;
    wishesByKey.set(getWishKey(wish), wish);
  });

  return Array.from(wishesByKey.values());
};

const getSavedWishes = () => {
  try {
    const savedWishes = JSON.parse(localStorage.getItem(wishesStorageKey) || '[]');
    return mergeWishes(Array.isArray(savedWishes) ? savedWishes : []);
  } catch {
    return starterWishes;
  }
};

function Wishes() {
  const [wishes, setWishes] = useState(getSavedWishes);
  const [form, setForm] = useState({ name: '', message: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    localStorage.setItem(wishesStorageKey, JSON.stringify(wishes));
  }, [wishes]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = form.name.trim();
    const message = form.message.trim();

    if (!name || !message) return;

    const newWish = { name, message };

    setWishes((currentWishes) => {
      const updatedWishes = mergeWishes([newWish, ...currentWishes]);
      localStorage.setItem(wishesStorageKey, JSON.stringify(updatedWishes));
      return updatedWishes;
    });

    setForm({ name: '', message: '' });
    setStatus('Wish added successfully! Refresh ke baad bhi yahi rahegi.');
  };

  return (
    <section className="section-shell wishes-section" id="wishes">
      <p className="eyebrow">Guest wishes</p>
      <h2>Leave a Sweet Note</h2>
      <div className="wishes-layout">
        <form className="wish-form" onSubmit={handleSubmit}>
          <label htmlFor="guest-name">Your name</label>
          <input
            id="guest-name"
            type="text"
            placeholder="e.g. Priya Aunty"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
          />

          <label htmlFor="guest-message">Your wish</label>
          <textarea
            id="guest-message"
            rows="4"
            placeholder="Write a blessing or cute message..."
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
          />

          <button className="primary-button" type="submit">Add Wish</button>
          {status && <p className="wish-status">{status}</p>}
        </form>

        <div className="wish-list" aria-live="polite">
          {wishes.map((wish, index) => (
            <article className="wish-card" key={`${getWishKey(wish)}-${index}`}>
              <h3>{wish.name}</h3>
              <p>{wish.message}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Wishes;
