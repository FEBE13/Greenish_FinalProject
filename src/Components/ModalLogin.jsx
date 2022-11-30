import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAuth } from '../Redux/Action/AuthAction'


function ModalLogin( { show, onClose }) {
  const dispacth = useDispatch()
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")


  // const auther = useSelector((state) => state.Auth);
  // console.log(auther);
  
  // useEffect(() => {
  //   dispacth(getAuth());
  // }, []);
  // useEffect(() => {
  //   if (localStorage.getItem("failed") === "true") {
  //     alert("salah pass dan email")
  //   }else if(localStorage.getItem("failed") === "false"){
  //     alert("berhasil")
  //   }
  // }, []);

  const data = {
    email:email,
    pass:pass
  }
    function handleSubmit(e) {
      e.preventDefault()
      dispacth(getAuth(data))


    }
    return (
    
    <Modal show={show}  onHide={onClose}>
        <Modal.Header style={{border:'0 none'}}>
          <div style={{width:'400px'}}>
          <h3 style={{fontWeight:'700',textAlign:'left'}}>Bumi yang rapuh ini perlu kita !</h3>
          <p style={{fontSize:'20px',textAlign:'left'}}>Masuk untuk melihat informasi dan kegiatan terkini </p>
          </div>              
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                <Form.Label>Alamat Surel</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="nama@xample.com"
                    autoFocus
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    autoFocus
                    value={pass}
                    onChange={(e)=>setPass(e.target.value)}
                />
                </Form.Group>
                <Button type='submit' style={{backgroundColor:'#38A755',border:'none',fontSize:'18px',letterSpacing:'1.3px'}}>
            Masuk
          </Button>
          </Form></Modal.Body>
      </Modal>
  )
}

export default ModalLogin