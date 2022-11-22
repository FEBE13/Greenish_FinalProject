import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from "../Assets/logo.png"

function Navi() {
    const gbr = <img
    src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
    width="40"
    height="40"
    className="rounded-circle"
  />
  return (
    <Navbar style={{height:'fit-content',backgroundColor:'#EFF7F2',padding:'20px 0'}} expand="lg">
      <Container className='contain' >
        <Navbar.Brand ><Link><img src={logo} width={180}/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Container className='wrap-collapse'>
        <Navbar.Collapse id="navbarScroll" style={{marginTop:'5px'}} >
          <Nav
          
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',width:'100%',justifyContent:'center',marginTop:'50px'}}
            navbarScroll
            
          >
            <Nav.Link><Link className='link'>About</Link></Nav.Link>
            <Nav.Link><Link className='link'>Event</Link></Nav.Link>
            <Nav.Link><Link className='link'>News</Link></Nav.Link>
          </Nav>
          <Container style={{width:'fit-content'}}>
          {/* <NavDropdown title={gbr} id="navbarScrollingDropdown">
              <NavDropdown.Item><Link className='link1'>Dashboard</Link></NavDropdown.Item>
              <NavDropdown.Item>
                <Link className='link1'>Edit Profile</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className='link1'>Sign Out</Link>
              </NavDropdown.Item>
            </NavDropdown> */}
            <Button className='btnLogin' style={{fontWeight:'600',width:'170px',padding:'10px',borderRadius:'50px',backgroundColor:'#38A755',border:'none', boxShadow:'0px 5px 20px 0px rgba(0, 0, 0, 0.25)'}}>
                Login / Register
            </Button>

          </Container>
        </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  )
}

export default Navi