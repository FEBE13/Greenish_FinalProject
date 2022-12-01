import React, { useState } from 'react'
import { Container, Offcanvas } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { postArticle } from '../Redux/Action/ArticlesAction';
import { postEvent } from '../Redux/Action/EventAction';

function PostArticle() {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);  
  const closeSidebar = () => setShow(false);  
  const showSidebar = () => setShow(true);  


  const [name,setName] = useState("")
  const [poster,setPoster] = useState("")
  const [desc,setDesc] = useState("")
  const [date,setDate] = useState("")
  const [author,setAuthor] = useState("")
  
  const data = {
    title : name,
    poster,
    content : desc,
    author,
    date,
    likes : 0
  }
  function reset() {
    setName("")
    setPoster("")
    setDesc("")
    setDate("")
    setAuthor("")
  }
  function handlepostart(e) {
    e.preventDefault()
    dispatch(postArticle(data))
    alert("berhasil post article")
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
      <div style={{ backgroundColor: "#eff7f2",paddingTop:'100px',height:'100%',paddingBottom:'100px'}}>
      <div className="container-addevent">
            <div className="container ">
               <center>
                  <h1>Form Add Articles</h1>
               </center>
               <form id="forme" onSubmit={handlepostart}>
                  <div className="mb-3">
                     <label htmlFor="nama-artikel" className="form-label">
                        Nama Artikel
                     </label>
                     <input
                        required
                        type="text"
                        className="form-control"
                        id="nama-artikel"
                        placeholder="masukkan nama artikel"
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="gambar-artikel" className="form-label">
                        Gambar Artikel
                     </label>
                     <input
                        required
                        type="text"
                        className="form-control"
                        id="gambar-artikel"
                        placeholder="Masukan link gambar artikel"
                        value={poster}
                        onChange={(e)=>{setPoster(e.target.value)}}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="author" className="form-label">
                        Nama Author
                     </label>
                     <input
                        required
                        type="text"
                        className="form-control"
                        id="author"
                        placeholder="Masukkan nama author"
                        value={author}
                        onChange={(e)=>{setAuthor(e.target.value)}}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="tanggal">Waktu artikel</label>
                     <input
                        required
                        type="date"
                        id="tanggal"
                        name="tanggal"
                        className="form-control"
                        placeholder="Masukkan waktu artikel"
                        value={date}
                        onChange={(e)=>{setDate(e.target.value)}}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="desc-event" className="form-label">
                        Description Event
                     </label>
                     <textarea
                        required
                        className="form-control"
                        id="desc-event"
                        rows="3"
                        value={desc}
                        onChange={(e)=>{setDesc(e.target.value)}}
                     ></textarea>
                  </div>
                  <center>
                     <button type="submit" className="btn btn-primary">
                        Submit
                     </button>
                  </center>
               </form>
            </div>
         </div>
      </div>
    </div>
  )
}

export default PostArticle