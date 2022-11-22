import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'


function ModalLogin( { show, onClose }) {
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")
    function handleSubmit(e) {
      e.preventDefault()
      alert(email+""+pass)
    }
    return (
    
    <Modal show={show} fullscreen='sm-down' onHide={onClose}>
        <Modal.Header style={{border:'0 none'}}>
          <div style={{width:'400px'}}>
          <h3 style={{fontWeight:'700'}}>Bumi yang rapuh ini perlu kita !</h3>
          <p style={{fontSize:'20px'}}>Masuk untuk melihat informasi dan kegiatan terkini </p>
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