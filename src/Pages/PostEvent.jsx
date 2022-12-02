import React, { useState } from 'react'
import { Container, Offcanvas } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { postEvent } from '../Redux/Action/EventAction';

function PostEvent() {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);  
  const closeSidebar = () => setShow(false);  
  const showSidebar = () => setShow(true);  


  const [name,setName] = useState("")
  const [poster,setPoster] = useState("")
  const [desc,setDesc] = useState("")
  const [date,setDate] = useState("")
  const [place,setPlace] = useState("")
  const [organizer,setOrganizer] = useState("")
  const [CP,setCP] = useState("")
  const [phone,setPhone] = useState("")
  const [maxPerson,setMax] = useState("")
  // const [person,setPhone] = useState("")
  // const [phone,setPhone] = useState("")
  const data = {
    name : name,
    poster,
    desc,
    date,
    place,
    organizer,
    CP,
    phone,
    person : 0,
    maxPerson
  }
  function reset() {
    setName("")
    setPoster("")
    setDesc("")
    setDate("")
    setPlace("")
    setOrganizer("")
    setCP("")
    setPhone("")
    setMax("")
  }
  function handlepostevent(e) {
    e.preventDefault()
    dispatch(postEvent(data))
    alert("berhasil post event")
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
                  <h1>Form Add Event</h1>
               </center>
               <form id="forme" onSubmit={handlepostevent}>
                  <div className="mb-3">
                     <label htmlFor="nama-event" className="form-label">
                        Nama Event
                     </label>
                     <input
                        required
                        type="text"
                        className="form-control"
                        id="nama-event"
                        placeholder="masukkan nama event"
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="gambar-event" className="form-label">
                        Gambar Event
                     </label>
                     <input
                        required
                        type="text"
                        className="form-control"
                        id="gambar-event"
                        placeholder="Masukan link gambar event"
                        value={poster}
                        onChange={(e)=>{setPoster(e.target.value)}}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="organizer" className="form-label">
                        Organizer
                     </label>
                     <input
                        required
                        type="text"
                        className="form-control"
                        id="organizer"
                        placeholder="Masukkan nama organizer"
                        value={organizer}
                        onChange={(e)=>{setOrganizer(e.target.value)}}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="cp" className="form-label">
                        PIC
                     </label>
                     <input
                        required
                        type="text"
                        className="form-control"
                        id="pic"
                        placeholder="Masukkan nama pic acara"
                        value={CP}
                        onChange={(e)=>{setCP(e.target.value)}}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="cp" className="form-label">
                        CP PIC
                     </label>
                     <input
                        required
                        type="number"
                        className="form-control"
                        id="cp"
                        placeholder="Masukkan telp PIC"
                        value={phone}
                        onChange={(e)=>{setPhone(e.target.value)}}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="location-event" className="form-label">
                        Location Event
                     </label>
                     <input
                        required
                        type="text"
                        className="form-control"
                        id="location-event"
                        placeholder="Masukkan lokasi event"
                        value={place}
                        onChange={(e)=>{setPlace(e.target.value)}}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="tanggal">Waktu Pelakasanaan</label>
                     <input
                        required
                        type="date"
                        id="tanggal"
                        name="tanggal"
                        className="form-control"
                        placeholder="Masukkan waktu event"
                        value={date}
                        onChange={(e)=>{setDate(e.target.value)}}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="max-person" className="form-label">
                        Max person
                     </label>
                     <input
                        required
                        type="number"
                        className="form-control"
                        id="max-person"
                        placeholder="Masukkan jumlah maksimal partisipant event"
                        value={maxPerson}
                        onChange={(e)=>{setMax(e.target.value)}}
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

export default PostEvent