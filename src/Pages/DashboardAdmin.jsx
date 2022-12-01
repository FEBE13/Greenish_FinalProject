import React, { useEffect } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Button, Container, Table} from 'react-bootstrap';  
import {useState} from 'react'    
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUser } from '../Redux/Action/UserAction';

function DashboardAdmin() {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);  
  const closeSidebar = () => setShow(false);  
  const showSidebar = () => setShow(true);  
  const user = useSelector((state) => state.User);

  useEffect(()=>{
    dispatch(getUser())
  },[])

  function deleteData(id) {
    dispatch(deleteUser(id))
    alert('berhasil hapus data')
    window.location.reload()
    
  }
  return (  
    <>  
    <Container className='p-4' style={{width:'fit-content',position:'absolute',height:'100%'}}>  
    <i class="uil uil-bars" style={{fontSize:'50px',cursor:'pointer'}} onClick={showSidebar}></i>  
      <Offcanvas show={show} onHide={closeSidebar}>  
        <Offcanvas.Header closeButton>  
          <Offcanvas.Title><h3 style={{color:'black',height:'fit-content',margin:'0',marginTop:'10px'}}>Greenish Admin</h3></Offcanvas.Title>  
        </Offcanvas.Header>  
        <Offcanvas.Body>  
          <div style={{display:'flex',flexDirection:'column'}}>
          <Link className='link1' to={"/"} style={{margin:'10px'}}><h4>Homepage</h4></Link>
          <Link className='link1' to={"/pstam"} style={{margin:'10px'}}><h4>Post Admin</h4></Link>
          <Link className='link1' to={"/pstev"} style={{margin:'10px'}}><h4>Post Event</h4></Link>
          <Link className='link1' to={"/pstar"} style={{margin:'10px'}}><h4>Post Article</h4></Link>
          </div>
        </Offcanvas.Body>  
      </Offcanvas>  
      </Container>
      <div className="dataUser" style={{width:'90%',margin:'auto',paddingTop:'100px'}}>
        <h2 style={{color:'black'}}>User Active</h2>
      <Table striped="columns" responsive>
      <thead>
      
        <tr>
          <th>ID</th>
          <th>Nama Lengkap</th>
          <th>Email</th>
          <th>Password</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {user.users.map((item)=>{
          return(
            <tr>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td><input type="password" value={item.pass} disabled style={{border:'none'}} id="" /></td>
              <td> <Button onClick={()=>{deleteData(item._id)}}>Delete</Button> </td>
            </tr>      
          )
        })}
        
      </tbody>
    </Table>
      </div>
    </>  
  );  
}

export default DashboardAdmin