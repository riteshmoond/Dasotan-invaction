import Home from './components/Home';
import Timeline from './components/Timeline';
import InvitationDetails from './components/InvitationDetails';
import Gallery from './components/Gallery';
import Wishes from './components/Wishes';
import Footer from './components/Footer';
import './App.css';

function App() {
  const invitation = {
    babyName: 'gudu',
    eventName: 'Dasotan',
    date: '19 April 2026',
    time: '01:00 PM',
    venue: 'bagdiya hause, bhagtpura',
    parentsName: 'indraj & pinky',
    rsvpNumber: '9257479576',
    contactNumber: '9257479576',
  };

  return (
    <main className="baby-page">
      <Home babyName={invitation.babyName} eventName={invitation.eventName} />
      <Timeline />
      <InvitationDetails {...invitation} />
      <Gallery />
      <Wishes />
      <Footer {...invitation} />
    </main>
  );
}

export default App;
