import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import logo from "../Assets/logo.png"
import { getAuth } from '../Redux/Action/AuthAction';
import { getEvent } from '../Redux/Action/EventAction';
import { getUser } from '../Redux/Action/UserAction';
import ModalLogin from './ModalLogin';
import ModalSignUp from './ModalSignUp';
import { UserContextFill } from './UserContext';

function Navi() {
  const dispatch = useDispatch();
  // const auther = useSelector((state) => state.Auth);
  // // console.log(auther);
  
  // useEffect(() => {
  //   dispatch(getAuth());
  // }, []);
  const data = useSelector((state) => state.User);
  // console.log(data);
  function handleSignout() {
    localStorage.removeItem("token")
    window.location.reload()
    // localStorage.removeItem("token")
  }
  useEffect(() => {
    dispatch(getUser());  
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const {login,setLogin} = useContext(UserContextFill)
  const {alrlogin,setAlrlogin} = useContext(UserContextFill)
  
  useEffect(()=>{
    if (localStorage.getItem("token")) {
      setLogin("login_hide")
      setAlrlogin("login_show")
    }
  },[localStorage.getItem("token")])


  return (
    <Navbar style={{height:'fit-content',backgroundColor:'#EFF7F2',padding:'20px 0'}} expand="lg">
      <Container className='contain' >
        <Navbar.Brand ><Link to={"/"}><img src={logo} width={180}/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Container className='wrap-collapse'>
        <Navbar.Collapse id="navbarScroll" style={{marginTop:'5px'}} >
          <Nav
          
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',width:'100%',justifyContent:'center',marginTop:'50px'}}
            navbarScroll
            
          >
            <Nav.Link><Link to={"/aboutus"} className='link'>About</Link></Nav.Link>
            <Nav.Link><Link to={"/event"} className='link'>Event</Link></Nav.Link>
            <Nav.Link><Link to={"/news"} className='link'>News</Link></Nav.Link>
          </Nav>
          <Container className='wrap-right' style={{width:'fit-content',display:'flex',alignItems:'center'}}>
          <NavDropdown  title= {<img
    src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
    width="40"
    height="40"
    className="rounded-circle"
  />} id={alrlogin}>
              <NavDropdown.Item><Link className='link1'>Dashboard</Link></NavDropdown.Item>
              <NavDropdown.Item>
                <Link className='link1'>Edit Profile</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className='link1' onClick={handleSignout}>Sign Out</Link>
              </NavDropdown.Item>
            </NavDropdown>
             <Button className='btnLogin' id={login} onClick={handleShow} style={{fontWeight:'600',width:'100px',padding:'8px',borderRadius:'8px',backgroundColor:'#38A755',border:'none', boxShadow:'0px 5px 20px 0px rgba(0, 0, 0, 0.25)'}}>
                Register
            </Button>
            <Nav.Link id={login} ><Link style={{marginLeft:'15px',fontSize:'20px',textDecoration:'none',fontWeight:'600',color:'#38A755'}} onClick={handleShow1}>Login</Link></Nav.Link>
            <ModalLogin show={show1} onClose={handleClose1}/>
            <ModalSignUp show={show} onClose={handleClose}/>
          </Container>
        </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  )
}

export default Navi