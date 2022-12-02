import React from 'react'
import ContentAboutus from '../Components/ContentAboutus'
import Navi from '../Components/Navi'
import Footer from '../Components/Footer'
import HeaderAboutUs from '../Components/HeaderAboutUs'

function Aboutus() {
  return (
    <div style={{backgroundColor:'#f5f6fa'}}>
        <Navi/>
        <HeaderAboutUs />
        <ContentAboutus />
        <Footer />
    </div>
  )
}

export default Aboutus