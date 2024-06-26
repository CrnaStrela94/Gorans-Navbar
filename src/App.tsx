import './App.css';
import Navbar from './components/Navbar/NavBar';
import ShareButton from './components/Buttens/buttens';
import { DragAndDrop } from './components/DragDrop/DragAndDrop';
// import Card from './components/Cards/Card';

//-------------------------------------------NavBar-----------------------------------------------//
const GoToNavLink = [
  { Text: 'Home', href: '/#' },
  { Text: 'About oss', href: '/#' },
  { Text: 'Contakt oss', href: '/#' },
  { Text: 'Different services', href: '/#' },
  { Text: 'Cooperate with oss', href: '/#' }
];

//------------------------------------------------------------------------------------------//

//-------------------------------------Social Media Butten's---------------------------------------//

const socialLinks = [
  { className: "twitter", icon: "ri-twitter-line", href: "#" },
  { className: "facebook", icon: "ri-facebook-line", href: "#" },
  { className: "close", icon: "ri-close-line", href: "#" }, // För att stänga knap menyn 
  { className: "dribbble", icon: "ri-dribbble-line", href: "#" },
  { className: "whatsapp", icon: "ri-whatsapp-line", href: "#" }
];

//------------------------------------------------------------------------------------------//


function App() {
  return (
    <>
      <Navbar GoToNavLink={GoToNavLink} />
      <ShareButton socialLinks={socialLinks} />
      <DragAndDrop />
      {/* <Card /> */}
    </>
  );
}

export default App;
