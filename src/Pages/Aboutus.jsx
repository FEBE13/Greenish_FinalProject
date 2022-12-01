import React from 'react'
import ContentAboutus from '../Components/ContentAboutus'
import Navi from '../Components/Navi'
import Footer from '../Components/Footer'

function Aboutus() {
  return (
    <div style={{backgroundColor:'#f5f6fa'}}>
        <Navi/>
        <ContentAboutus />
        <Footer />
    </div>
  )
}

export default Aboutus