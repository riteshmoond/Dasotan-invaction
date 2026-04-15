import { useState } from 'react';

function ShareBar({ babyName = 'gudu', eventName = 'Dasotan', date = '19 April 2026', time = '01:00 PM', venue = '' }) {
  const [status, setStatus] = useState('');

  const shareText = `${babyName}'s ${eventName} Invitation\nDate: ${date}\nTime: ${time}\nVenue: ${venue}`;

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: `${babyName}'s ${eventName}`, text: shareText, url: window.location.href });
        setStatus('Invitation shared!');
        return;
      }

      await navigator.clipboard.writeText(`${shareText}\n${window.location.href}`);
      setStatus('Invitation link copied!');
    } catch {
      setStatus('Share cancel ho gaya. Link manually copy kar sakte ho.');
    }
  };

  const whatsappText = encodeURIComponent(`${shareText}\n${window.location.href}`);

  return (
    <section className="section-shell share-section" id="share">
      <p className="eyebrow">Share invite</p>
      <h2>Invite ko family ke saath share karein</h2>
      <div className="share-actions">
        <button className="primary-button" type="button" onClick={handleShare}>Share Invitation</button>
        <a
          className="secondary-button"
          href={`https://wa.me/?text=${whatsappText}`}
          target="_blank"
          rel="noreferrer"
        >
          Share on WhatsApp
        </a>
      </div>
      {status && <p className="wish-status">{status}</p>}
    </section>
  );
}

export default ShareBar;
