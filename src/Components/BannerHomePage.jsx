import React from 'react'

function BannerHomePage() {
  return (
    <div className='container banner-awal'>
        <div className='row'>
            <div className='col text-banner'style={{padding:'80px'}}>
                <h3 style={{color: "#686868",fontSize:'30px',fontWeight:'600'}}>Mari Bergabung !</h3>
                <h1 style={{fontSize:'45px',fontWeight:'700',letterSpacing:'0.5px'}}>Greenish.</h1>
                <h3 style={{color: "#686868",fontSize:'28px',fontWeight:'500'}}>Kami tidak bisa melakukannya</h3>
                <h3 style={{color: "#686868",fontSize:'28px',fontWeight:'500'}}>tanpa kamu</h3>
                <div style={{marginTop:'15px'}}><button className='jelajahi'style={{border:'none',fontSize:'20px',fontWeight:'500'}}>Jelajahi Sekarang</button></div>
            </div>
            <div className='col img-banner'>
                <img src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1669162563/bro_bqjqoy.jpg" alt="" />
            </div>

        </div>
    </div>
  )
}

export default BannerHomePage