import React from 'react'
import BannerEvent from '../Components/BannerEvent'
import CardComponent from '../Components/CardComponent'
import Footer from '../Components/Footer'
import Navi from '../Components/Navi'

function Event() {
  return (
    <div style={{backgroundColor:'#f5f6fa'}}>
        <Navi/>
        <BannerEvent/>
        <CardComponent/>
        <Footer />
    </div>
  )
}

export default Event