import { Link, useNavigate } from 'react-router-dom';
import Activities from './../components/Activities';
export default function Home() {
    
  return (
    <section>
      <center><h1>Home Page</h1></center>
      <div className="tophome">
        <img className="banner" src="/banner.png" alt="blue banner spiral ring around the name UG Cybersecurity culb"/>
      </div>

      <div className="hero">
            <div>
            <img className="heroimg" src="/promopic.jpg" alt="UG Cybersecurity Club Logo" />
            </div>
            <div className="herocontent">
                <h1>Empowering UG Students in Cybersecurity</h1>
                <article>
                    
                    The University of Guyana Cybersecurity Club (UGCC) is a student-led organization dedicated to building awareness, 
                    technical skills, and professional opportunities in the field of cybersecurity. 
                    Our purpose is to provide members with knowledge and experience of Cyber Security principles and tools to improve their academic and professional careers.
                    <br></br> 
                    Through workshops, competitions, and collaborative projects, UGCC empowers students to tackle real-world cyber threats 
                    while fostering a culture of innovation and digital responsibility.”
                </article>
            </div>
        </div>
        <div className='join'>
          <button className="joinNow"><Link to="/MyForm">Join Now</Link></button>
        </div>

        <div>
          <Activities/>
        </div>
        
    </section>
  );

}