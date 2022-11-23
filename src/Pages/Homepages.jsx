import React from 'react'
import AboutUsHomepage from '../Components/AboutUsHomepage'
import BannerHomePage from '../Components/BannerHomePage'
import BannerJoinHomePage from '../Components/BannerJoinHomePage'
import EventHomePage from '../Components/EventHomePage'
import Footer from '../Components/Footer'
import InformasiHomePage from '../Components/InformasiHomePage'
import Navi from '../Components/Navi'

function Homepages() {
  return (
    <div>
        <Navi/>
        <BannerHomePage />
        <AboutUsHomepage />
        <EventHomePage />
        <BannerJoinHomePage />
        <InformasiHomePage />
        <Footer />
    </div>
  )
}

export default Homepages