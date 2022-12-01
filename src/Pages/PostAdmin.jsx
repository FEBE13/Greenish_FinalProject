import React, { useState } from "react";
import { Container, Offcanvas } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postUser } from "../Redux/Action/UserAction";

function PostAdmin() {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);  
  const closeSidebar = () => setShow(false);  
  const showSidebar = () => setShow(true);  

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")

  const data = {
    name : name,
    email : email,
    pass : pass,
    role : "admin"
  }
  function reset() {
    setName("")
    setEmail("")
    setPass("")
  }

  function handlepostadmin(e) {
    e.preventDefault()
    dispatch(postUser(data))
    alert("berhasil post admin")
    reset()
  }
  return (
    <div>
      <Container
        className="p-4"
        style={{ width: "fit-content", position: "absolute", height: "100%" }}
      >
        <i
          class="uil uil-bars"
          style={{ fontSize: "50px", cursor: "pointer" }}
          onClick={showSidebar}
        ></i>
        <Offcanvas show={show} onHide={closeSidebar}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <h3
                style={{
                  color: "black",
                  height: "fit-content",
                  margin: "0",
                  marginTop: "10px",
                }}
              >
                Greenish Admin
              </h3>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link className="link1" to={"/"} style={{ margin: "10px" }}>
                <h4>Homepage</h4>
              </Link>
              <Link className="link1" to={"/dashboardAdmin"} style={{ margin: "10px" }}>
                <h4>User Status</h4>
              </Link>
              <Link className="link1" to={"/pstam"} style={{ margin: "10px" }}>
                <h4>Post Admin</h4>
              </Link>
              <Link className="link1" to={"/pstev"} style={{ margin: "10px" }}>
                <h4>Post Event</h4>
              </Link>
              <Link className="link1" to={"/pstar"} style={{ margin: "10px" }}>
                <h4>Post Article</h4>
              </Link>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
      <div style={{ backgroundColor: "#eff7f2",paddingTop:'100px',height:'100vh',paddingBottom:'100px'}}>
         <div className="container-addevent">
            <div className="container ">
               <center>
                  <h1>Form Tambah User</h1>
               </center>
               <form id="forme" onSubmit={handlepostadmin}>
                  <div className="mb-3">
                     <label htmlFor="nama-event" className="form-label">
                        Nama admin
                     </label>
                     <input
                        required
                        type="text"
                        className="form-control"
                        id="nama-event"
                        placeholder="Fredy Dumbo"
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="gambar-event" className="form-label">
                        Email admin
                     </label>
                     <input
                        required
                        type="email"
                        className="form-control"
                        id="gambar-event"
                        placeholder="example@xmaple.com"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="organizer" className="form-label">
                        Password login
                     </label>
                     <input
                        required
                        type="text"
                        className="form-control"
                        id="organizer"
                        placeholder="Masukkan password untuk login"
                        value={pass}
                        onChange={(e)=>{setPass(e.target.value)}}
                     />
                  </div>
                  <center>
                     <button style={{marginTop:'10px'}} type="submit" className="btn btn-primary">
                        Submit
                     </button>
                  </center>
               </form>
            </div>
         </div>
      </div>
    </div>
  );
}

export default PostAdmin;
