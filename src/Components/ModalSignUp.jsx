import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

function ModalSignUp({show,onClose}) {
  return (
    <Modal show={show} fullscreen='sm-down' onHide={onClose}>
        <Modal.Header  style={{border:'0 none'}}>
          <div style={{width:'400px'}}>
          <h3 style={{fontWeight:'700'}}>Daftarkan dirimu secara <span style={{color:'#38A755'}}>Gratis</span></h3>
          <p style={{fontSize:'20px'}}>Greenish berkomitmen melindungi email anda dengan baik</p>
          </div>              
        </Modal.Header>
        <Modal.Body><Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control
                type="text"
                placeholder="Samantha Djuani"
                autoFocus
              />
            </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Alamat Surel</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="nama@xample.com"
                    autoFocus
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    autoFocus
                />
                </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Konfirmasi Password</Form.Label>
                    <Form.Control
                        type="password"
                        autoFocus
                    />
                    </Form.Group>
            
          </Form></Modal.Body>
        <Modal.Footer style={{justifyContent:'flex-start'}}>
          <Button style={{backgroundColor:'#38A755',border:'none',fontSize:'18px',letterSpacing:'1.3px'}} onClick={onClose}>
            Daftar
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default ModalSignUp