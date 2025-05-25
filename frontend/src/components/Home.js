// import React, {useState, useEffect, useContext} from 'react'
// import { useNavigate, NavLink } from 'react-router-dom'
// import '../stylesheets/home.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Row, Col,Container, Fade, Button, ListGroup, Badge } from 'react-bootstrap';
// import { UserContext } from '../App';
// import MainNavbar from './MainNavbar';
// import Signup from './Signup';


// const Home = () => {

//     const {state, dispatch} = useContext(UserContext);   
//     // const [selectedProject, setSelectedProject] = useState();
    
//   return (
//     <>
//         {state
//         ?
//         <Container  className='background ' fluid>
//           <MainNavbar />
//         </Container>
//         :
//         <Container className='background2 ' fluid>
//           <Signup/>
//           {/* <h1>For creating / managing teams please<NavLink to="/login" >Login</NavLink></h1> */}
//         </Container>
//         }
//     </>
//   )
// }

// export default Home


import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import '../stylesheets/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../App';
import MainNavbar from './MainNavbar';
import Signup from './Signup';
import welcome from '../images/welcomeImg.jpg'

const Home = () => {
  const { state } = useContext(UserContext);

  return (
    <>
      {state ? (
        <Container className='background' fluid>
          <MainNavbar />

          {/* Welcome Image Below Navbar */}
          <img 
            src={welcome} 
            alt="Welcome"
            style={{
              width: '100%',
              maxWidth: '1350px',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              display: 'block',
              margin: '20px auto'
            }}
          />
        </Container>
      ) : (
        <Container className='background2' fluid>
          <Signup />
        </Container>
      )}
    </>
  );
};

export default Home;
