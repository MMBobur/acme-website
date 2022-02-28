import React from 'react'
import './index.css'

const FooterComponent = () => {
  return (
    <div className='footer'>
        <div className="container">
          <div className="logo">
            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg" alt="" />
          </div>
          <div className="social-icons">
            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e8407a25b6234aeec960fb9_Twitter_Social_Icon_Rounded_Square_White.svg" alt="" />
            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e8407aa3fb6cf5576f1658b_Facebook%20Logo.svg" alt="" />
            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e840774014326b74bbeeeb6_Insta.svg" alt="" />
          </div>
        </div>
        <div className="bottom">
          <small>Made In <a href="">Webflow</a>. © 2020.</small>
        </div>
    </div>
  )
}

export default FooterComponent