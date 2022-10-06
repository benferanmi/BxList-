import React from 'react'
import './banner.css'
import BannerImage from '../assets/image/bannerimg.png'

const Banner = () => {
  return (
    <div className='header-banner'>
        <div className='banner-left'>
            <div className='banner-head'>
                <h1>
                    Ben Car Turning
                </h1>
                <p>
                    The list of of cars if very Large and it is updated daily. <br/>
                    You can get updates about the latest cars and vechicles in town.
                </p>

                <button type="button">Buy a Car</button>
            </div>
            <div className='banner-feature'>
                <div className='feature-price'>
                    <h2>$5000</h2>
                    <p>Minimum price for a car listed on our website </p>
                </div>
                <div className='horizontal-line'>
                </div>
                <div>
                    <h2>24/7</h2>
                    <p>Workshop working hours</p>
                </div>
            </div>
        </div>
        <div className='banner-middle'>
            
        </div>
        <div className='banner-right'>
            <img src={BannerImage} alt="website banner" />
        </div>
    </div>
  )
}

export default Banner