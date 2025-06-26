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




const App = () => {
    return(
      <div >
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
