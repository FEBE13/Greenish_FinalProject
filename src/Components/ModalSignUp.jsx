import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { postUser } from '../Redux/Action/UserAction'

function ModalSignUp({show,onClose}) {
  const dispatch = useDispatch()
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [pass1,setPass1] = useState("")
  const [pass2,setPass2] = useState("")

  const data = {
    name : name,
    email : email,
    pass : pass2,
    role : "user"
  }
  function cekPass(a,b) {
    if (a === b) {
      return true
    }else{
      return false
    }
  }
  function reset() {
    setName("")
    setEmail("")
    setPass1("")
    setPass2("")
  }
  function registerHanlder(e) {
    e.preventDefault()
    if (cekPass(pass1,pass2)) {
      dispatch(postUser(data))
      alert("berhasil register")
      reset()
    }else{
      alert("pastikan password sama")
    }
  }
  return (
    <Modal show={show} onHide={onClose}>
        <Modal.Header  style={{border:'0 none'}}>
          <div style={{width:'400px'}}>
          <h3 style={{fontWeight:'700'}}>Daftarkan dirimu secara <span style={{color:'#38A755'}}>Gratis</span></h3>
          <p style={{fontSize:'20px'}}>Greenish berkomitmen melindungi email anda dengan baik</p>
          </div>              
        </Modal.Header>
        <Modal.Body><Form onSubmit={registerHanlder}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control
                type="text"
                placeholder="Samantha Djuani"
                autoFocus
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Alamat Surel</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="nama@xample.com"
                    autoFocus
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}

                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    autoFocus
                    value={pass1}
                    onChange={(e)=>setPass1(e.target.value)}

                />
                </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Konfirmasi Password</Form.Label>
                    <Form.Control
                        type="password"
                        autoFocus
                        value={pass2}
                        onChange={(e)=>setPass2(e.target.value)}
    
                    />
                    </Form.Group>
          <Button style={{backgroundColor:'#38A755',border:'none',fontSize:'18px',letterSpacing:'1.3px'}} type='submit'>
            Daftar
          </Button>
          </Form></Modal.Body>

      </Modal>
  )
}

export default ModalSignUp