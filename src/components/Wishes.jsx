import { useEffect, useState } from 'react';

const wishesStorageKey = 'sanvi-dasotan-wishes';

const starterWishes = [
  { name: 'Nani & Nana', message: 'Hamari pyari si gudiya hamesha hasti rahe aur khushiyon se bhari rahe 💛' },
  { name: 'Buaa & Fufha', message: 'Bhagwan kare tumhari life hamesha love aur happiness se full rahe 🌸' },
  { name: 'Parents', message: 'Hamari nanhi pari hamari life ki sabse beautiful blessing hai ❤️' },
  { name: 'Family Friends', message: 'Sanvi ki life hamesha smiles, love aur cute moments se bhari rahe ✨' },
];

const getWishKey = (wish) => `${wish.name.trim().toLowerCase()}-${wish.message.trim().toLowerCase()}`;

const mergeWishes = (savedWishes = []) => {
  const wishesByKey = new Map();

  starterWishes.forEach((wish) => {
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
      <h2>Send Your Blessings to Sanvi</h2>
      <p className="section-intro">
        Aap apne pyaar bhare wishes aur blessings yahan share kar sakte hain. Har ek message hamare liye bahut special hoga, aur Sanvi ke liye ek khoobsurat yaadgar ban jayega.
      </p>
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

