import Home from './components/Home';
import Timeline from './components/Timeline';
import Countdown from './components/Countdown';
import InvitationDetails from './components/InvitationDetails';
import FamilySection from './components/FamilySection';
import ProgramSchedule from './components/ProgramSchedule';
import Gallery from './components/Gallery';
import Wishes from './components/Wishes';
import ShareBar from './components/ShareBar';
import MusicButton from './components/MusicButton';
import Footer from './components/Footer';
import './App.css';

function App() {
  const invitation = {
    babyName: 'gudu',
    eventName: 'Dasotan',
    date: '19 April 2026',
    time: '01:00 PM',
    eventDateTime: '2026-04-19T13:00:00+05:30',
    venue: 'bagdiya hause, bhagtpura',
    parentsName: 'indraj & pinky',
    rsvpNumber: '9257479576',
    contactNumber: '9257479576',
    mapQuery: 'bagdiya hause, bhagtpura',
  };

  return (
    <main className="baby-page">
      <MusicButton />
      <Home babyName={invitation.babyName} eventName={invitation.eventName} />
      <Countdown {...invitation} />
      <Timeline />
      <InvitationDetails {...invitation} />
      <FamilySection {...invitation} />
      <ProgramSchedule />
      <Gallery />
      <Wishes />
      <ShareBar {...invitation} />
      <Footer {...invitation} />
    </main>
  );
}

export default App;
