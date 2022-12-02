import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, updateUser } from "../Redux/Action/UserAction";


function EditProfile() {
    const user = useSelector((state) => state.User);
    const dispatch = useDispatch()
    const [userid,setUserid] = useState()
    const [name,setName] = useState()
    const[email,setEmail] = useState()
    const nav = useNavigate()


    const data = {
        name : name,
        email : email
      }


    useEffect(()=>{
        dispatch(getUser())
        
      },[])
    useEffect(()=>{
        if (!localStorage.getItem("token")) {
            nav("/")
        }
        
      },[])
    useEffect(() => {
        if (localStorage.getItem("token")) {
          const token = jwtDecode(localStorage.getItem("token"))
          setUserid(token.id)
        }else{
        }
      }, []);
    useEffect(() => {
        user.users.map((item)=>{
            if (item._id === userid) {
                setName(item.name)
                setEmail(item.email)
            }
        })
      }, [user]);
     
      function handleEdit(e) {
        e.preventDefault()
        dispatch(updateUser(userid,data))
        alert("berhasil ganti profile")
        nav("/")

      }

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          'url("https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        width:'100%'
      }}
    >
        <div
        className="overlay"
        style={{
          backgroundColor: "white",
          maxHeight: "420px",
          maxWidth: "870px",
          position: "absolute",
          left: "0",
          right: "0",
          top: "0",
          bottom: "0",
          margin: "auto",
          opacity: "0.4"
        }}
      >
      </div>
            
      <div
          style={{

            paddingRight:'20px',
            paddingLeft:'20px',
            paddingTop: "40px",
            height: "fit-content",
            paddingBottom: "40px",maxHeight: "420px",maxWidth: "870px",position: "absolute",left: "0",right: "0",top: "0",bottom: "0",margin: "auto"
          }}
        >
          <div className="container-addevent" style={{}}>
            <div className="Container">
              <center>
                <h1>Edit profile anda</h1>
              </center>
              <form id="forme" onSubmit={handleEdit}>
                <div className="mb-3">
                  <label htmlFor="nama-event" className="form-label">
                    Nama anda
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="nama-event"
                    placeholder="Fredy Dumbo"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="gambar-event" className="form-label">
                    Email anda
                  </label>
                  <input
                    required
                    type="email"
                    className="form-control"
                    id="gambar-event"
                    placeholder="example@xmaple.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                  />
                </div>
                <center>
                  <button
                    style={{ marginTop: "10px" }}
                    type="submit"
                    className="btn btn-success"
                  >
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

export default EditProfile;
