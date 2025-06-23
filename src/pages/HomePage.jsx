import { Link } from "react-router-dom";
import Header from "../components/HEADER/Header";

const HomePage = () => {
    return(
      <div>
        <Header />
     <div>
      <div style={{ backgroundColor: "#c9f0f5", minHeight: "100vh" }}>
      
      
        <div class="hero">
          <img src="/images/bannerimg.png" alt="College Banner" className="banner-image" />
          <div class="hero-text">
            <h1>Welcome to Vivekanand College!</h1>
            <p>Your journey to excellence starts here.</p>
            <a href="/apply" className="apply-btn">Apply Now!</a>
          </div>
          </div>

            <div className="why-choose">                 
                <p>Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, 
                  and holistic development. Established in 1980, we have proudly served generations of students, empowering them 
                  to achieve their full potential.
                </p>
                </div>
              <div>
              <p>
                At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our 
                state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem 
                where curiosity thrives and future leaders are shaped.
              </p>
              </div>
          <h2>Why Choose Vivekanand College?</h2>
          <ul>
            <li><strong>Legacy of Excellence:</strong> Decades of commitment to quality education.</li>
            <li><strong>Experienced Faculty:</strong> Learn from renowned experts and passionate educators.</li>
            <li><strong>Modern Facilities:</strong> Well-equipped labs, expansive library, and comfortable campus.</li>
            <li><strong>Holistic Development:</strong> Co-curricular activities, sports, and community service.</li>
            <li><strong>Strong Placements:</strong> Excellent opportunities with leading companies.</li>
          </ul>
  
          <h2>Campus Life & Facilities</h2>
          <div className="campus-content">
            <img src="/images/students.jpeg" alt="Students enjoying campus life at Vivekanand College" />
            <img src="/images/campus.jpg" alt="Campus" />
          </div>
          <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
          <p className="explore-text">Ready to explore our courses?</p>
          <div class="explore-container">
               <Link to="/courses" className="explore-btn">Explore Courses</Link>
        </div>
        </div>
        </div>
        </div>
        
      

      
         )

    }
    export default HomePage;
