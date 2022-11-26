import React from 'react'
import { Card } from 'react-bootstrap'

function CardComponent() {
  return (
    <div style={{width:'100%', padding:'20px',display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
        <Card className='carde' style={{margin:'10px',maxHeight:'370px',maxWidth:'300px',border:'none',cursor:'pointer'}}>
        <Card.Img style={{objectFit:'cover'}} variant="top" src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2022/10/24/d8b09805-73f7-4695-95d4-21546cb36b18-1666585095578-48fd0f85473d167f779c6f6ac9b9d325.jpeg"/>
        <Card.Body style={{padding:'15px',lineHeight:'20px'}}>
            <p style={{fontWeight:'600',fontSize:'18px'}}>EVERGLOW SOUTHEAST ASIA TOUR in Jakarta</p>
            <p style={{fontWeight:'300',fontSize:'15px'}}>Jakata Selatan</p>
            <p style={{fontWeight:'300',fontSize:'15px'}}>21 Des 2022</p>
        </Card.Body>
        </Card>
    </div>
  )
}

export default CardComponent