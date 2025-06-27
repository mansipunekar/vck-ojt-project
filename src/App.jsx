import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import AboutPages from './pages/AboutPages';
import HomePage from './pages/HomePage';
import './styles/Pages.css';
import Courses from './pages/Courses';
import ContactPages from './pages/ContactPages';
import ChatbotComponent from './components/Chatbot/ChatbotComponent';
import './App.css';
import AdmissionPages from './pages/AdmissionPages';
import Footer from './components/Footer/Footer';
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup';
import { useState } from 'react';




const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
    return(
      <div >
        <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Mansi Shahu Punekar"
          studentPhotoUrl="/images/WhatsApp Image 2025-06-27 at 9.53.02 AM.jpeg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      <Router>
          <Routes>
          <Route path="/" element={<HomePage/>}/>
          

            <Route path="/home" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPages/>}/>
            <Route path="/admission" element={<AdmissionPages/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/contact" element={<ContactPages/>}/>
            </Routes>
            <ChatbotComponent/>
           </Router>
           <Footer/>
      </div>

    )
}
export default App;
