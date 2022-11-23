import React from 'react'

function BannerHomePage() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col text-banner'>
                <h3 style={{color: "#686868"}}>Mari Bergabung !</h3>
                <h1>Greenish.</h1>
                <h3 style={{color: "#686868"}}>Kami tidak bisa melakukannya</h3>
                <h3 style={{color: "#686868"}}>tanpa kamu</h3>
                <button className='jelajahi'>Jelajahi Sekarang</button>
            </div>
            <div className='col img-banner'>
                <img src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1669162563/bro_bqjqoy.jpg" alt="" />
            </div>

        </div>
    </div>
  )
}

export default BannerHomePage