import React from 'react'
import Navi from '../Components/Navi'
import ArtikelNewsPage from '../Components/ArtikelNewPage'
import ContentNewsPage from '../Components/ContentNewsPage'
import TutorialNewsPage from '../Components/TutorialNewsPge'
import Footer from '../Components/Footer'
import HeaderNews from '../Components/HeaderNews'

function News() {
  return (
    <div style={{backgroundColor:'#f5f6fa'}}>
        <Navi/>
        <HeaderNews />
        <ArtikelNewsPage/>
        <ContentNewsPage/>
        <TutorialNewsPage/>
        <Footer/>
    </div>
  )
}

export default News