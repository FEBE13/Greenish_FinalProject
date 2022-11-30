import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import {
  Button,
  Col,
  Container,
  Form,
  ProgressBar,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navi from "../Components/Navi";
import { getEvent } from "../Redux/Action/EventAction";


function DetailEvent() {
  const { pathname } = useLocation();
  const { id } = useParams();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [hide,setHide] = useState("")
  const [userId,setUserid] = useState("")
  const data = useSelector((state) => state.Event);
  const user = useSelector((state) => state.User);
  const events = data.events;
  const [name,setName] = useState("")
  const [address,setAddress] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [city,setCity] = useState("")
  const [zip,setZip] = useState("")
  


  // events.map((item)=>{
    // })
    useEffect(() => {
      document.documentElement.scrollTo({
         top: 0,
         left: 0,
         behavior: "instant", // Optional if you want to skip the scrolling animation
      });
   }, [pathname])
    useEffect(() => {
      dispatch(getEvent());
    }, []);
    useEffect(() => {
      user.users.map((item)=>{
        if (item._id === userId) {
          setName(item.name)
          setEmail(item.email)
          // console.log(item)
        }
      })
    }, [user]);
    useEffect(() => {
      if (localStorage.getItem("token")) {
        const token = jwtDecode(localStorage.getItem("token"))
        setUserid(token.id)
        setHide("login_hide")
      }else{
        setHide("login_show")
      }
    }, []);
    
    return (
      <div style={{ backgroundColor: "#f5f6fa" }}>
      <Navi />
      {events.map((item)=>{
          if (item._id === id) {
            const date = new Date(item.date).getDate();
            const year = new Date(item.date).getFullYear();
            const month = new Date(item.date).toLocaleString(
               "id",
               {
                  month: "long",
               }
            );
            const datee = `${date} ${month} ${year}`
            return (
              <div key={item._id}>
                <div
        style={{
          height: "400px",
          padding: "0",
          maxWidth: "1000px",
          position: "relative",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        <img
          src={item.poster}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: "0.5",
          }}
        />
        <Container
          style={{
            padding: "0",
            backgroundColor: "blue",
            position: "absolute",
            top: "0",
            maxWidth: "600px",
            right: "0",
            left: "0",
            bottom: "0",
          }}
        >
          <img
            src={item.poster}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Container>
      </div>
      <Container
        style={{
          maxWidth: "1000px",
          padding: "0",
          marginTop: "30px",
        }}
      >
        <ProgressBar
          style={{
            maxWidth: "700px",
            margin: "auto",
            backgroundColor: "#b3b3b3",
            height: "25px",
          }}
          variant="success"
          animated
          now={item.person}
          max={item.maxPerson}
        />
        <div
          className="person"
          style={{
            padding: "5px 10px",
            maxWidth: "700px",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="person">
            <p
              style={{
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              {item.person} / {item.maxPerson} pendaftar
            </p>
          </div>
          <div className="person">
            <p
              style={{
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              hingga {datee}
            </p>
          </div>
        </div>

        <h2
          style={{
            textAlign: "left",
            color: "black",
            fontSize: "28px",
            fontWeight: "500",
            marginBottom: "30px",
          }}
        >
          {item.name}
        </h2>
        <h2
          style={{
            textAlign: "left",
            color: "black",
            fontSize: "25px",
            fontWeight: "400",
          }}
        >
          Event Organizer
        </h2>
        <div
          className="organizer"
          style={{
            padding: "10px",
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
            }}
          />
          <div
            className="name"
            style={{
              padding: "5px",
              lineHeight: "15px",
              height: "fit-content",
              marginTop: "15px",
              marginLeft: "10px",
            }}
          >
            <p style={{ fontSize: "22px", fontWeight: "400" }}>{item.CP}</p>
            <p style={{ fontSize: "22px", fontWeight: "400" }}>{item.phone}</p>
          </div>
        </div>

        <h2
          style={{
            textAlign: "left",
            color: "black",
            fontSize: "25px",
            fontWeight: "400",
            marginBottom: "10px",
          }}
        >
          Location and Date Event
        </h2>
        <div
          className="place"
          style={{ display: "flex", alignItems: "center", paddingLeft: "10px" }}
        >
          <i
            style={{ fontSize: "22px", fontWeight: "300", fontStyle: "normal" }}
            className="uil uil-location-point"
          >
            {" "}
            : {item.place}
          </i>
          {/* <p
            style={{
              height: "fit-content",
              marginTop: "15px",
              marginLeft: "10px",
              fontSize: "20px",
              fontWeight: "400",
            }}
          >
            Event dilaksanakan di zoom
          </p> */}
        </div>
        <div
          className="place"
          style={{ display: "flex", alignItems: "center", paddingLeft: "10px" }}
        >
          <i
            style={{ fontSize: "22px", fontWeight: "300", fontStyle: "normal" }}
            className="uil uil-calendar-alt"
          >
            {" "}
            : {datee}
          </i>
          {/* <p style={{height:'fit-content',marginTop:'15px',marginLeft:'10px',fontSize:'20px',fontWeight:'400'}}>Event dilaksanakan di zoom</p> */}
        </div>
        <div
          className="place"
          style={{ display: "flex", alignItems: "center", paddingLeft: "10px" }}
        >
          <i
            style={{ fontSize: "22px", fontWeight: "300", fontStyle: "normal" }}
            className="uil uil-building"
          >
            {" "}
            : {item.organizer}
          </i>
          {/* <p style={{height:'fit-content',marginTop:'15px',marginLeft:'10px',fontSize:'20px',fontWeight:'400'}}>Event dilaksanakan di zoom</p> */}
        </div>
        <h2
          style={{
            marginTop: "20px",
            textAlign: "left",
            color: "black",
            fontSize: "25px",
            fontWeight: "400",
            marginBottom: "10px",
          }}
        >
          Description Event
        </h2>
        <p
          style={{
            textAlign: "justify",
            fontSize: "18px",
            fontWeight: "400",
            paddingLeft: "10px",
          }}
        >
          {item.desc}
        </p>
      </Container>
      <hr />
      <hr style={{ width: "50%", margin: "auto" }} />
      <h2 style={{ margin: "auto", marginTop:'30px',textAlign: "center",color:'black'}}>
        Ayo daftarkan dirimu sekarang
      </h2>
      <Container style={{ padding: "20px" }}>
        <Form style={{ position: "relative" }}>
          <div
             id={hide}
            style={{
              blur: "50px",
              backgroundColor: "black",
              width: "100%",
              height: "100%",
              position: "absolute",
              opacity: "0.8",
            }}
          >
            <div
              className="text"
              style={{
                display: "hidden",
                height: "fit-content",
                width: "fit-content",
                position: "absolute",
                color: "white",
                left: "0",
                right: "0",
                top: "0",
                bottom: "0",
                margin: "auto",
              }}
            >
              <h2 style={{ textAlign: "center" }}>
                Ups! Sepertinya kamu belum login
              </h2>
              <h4 style={{ textAlign: "center" }}>
                Login atau register terlebih dahulu untuk bisa mendaftar event
                ini
              </h4>
            </div>
          </div>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Nama Anda</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your first name"
                //  value={fname}
                disabled
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="Jl. Mangga no 4"
              // onChange={(e) => setAdress(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Youremai@gmail.com"
              // value={email}
              disabled
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>phone</Form.Label>
            <Form.Control
              type="number"
              placeholder="085..."
              // value={phone} onChange={(e)=>setPhone(e.target.value)}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                // value={city}
                // onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                // value={zip}
                // onChange={(e) => setZip(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Button style={{ width: "100%" }} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
              </div>
            )
          }
        
      })}
    </div>
  );
}

export default DetailEvent;
