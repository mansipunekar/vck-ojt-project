import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import AboutPages from './pages/AboutPages';
import HomePage from './pages/HomePage';
import './styles/Pages.css';
import Courses from './pages/Courses';
import ContactPages from './pages/ContactPages';
import Apply from './pages/Apply';
import Footer from './components/Footer/Footer';




const App = () => {
    return(
      <div>
        <h1></h1>
        <Router>
          <Routes>
          <Route path="/" element={<HomePage/>}/>
          

            <Route path="/home" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPages/>}/>
            <Route path="/apply" element={<Apply/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/contact" element={<ContactPages/>}/>
             
             </Routes>
             <Footer/>
        </Router>
      </div>

    )
}
export default App;
