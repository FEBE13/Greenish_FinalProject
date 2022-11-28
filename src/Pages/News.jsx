import React from 'react'
import Navi from '../Components/Navi'
import ArtikelNewsPage from '../Components/ArtikelNewPage'
import ContentNewsPage from '../Components/ContentNewsPage'
import TutorialNewsPage from '../Components/TutorialNewsPge'
import Footer from '../Components/Footer'

function News() {
  return (
    <div>
        <Navi/>
        <ArtikelNewsPage/>
        <ContentNewsPage/>
        <TutorialNewsPage/>
        <Footer/>
    </div>
  )
}

export default News