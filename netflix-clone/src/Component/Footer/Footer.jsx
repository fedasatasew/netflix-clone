import React from 'react'
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='footer_outer_container'>
        <div className="footer_inner_container">
          <div className="footer_icons">
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div className="footer_data">
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investery Relations</li>
                <li>Legal Notice</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Performance </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift Cards </li>
                <li>Terms of use </li>
                <li>Corporate Information </li>
              </ul>
            </div>
          </div>
          <div className="service_code">
            Service Code
          </div>
          <div className="copy_write">
            &copy; 1995-2025 Netflix, Inc.
          </div>
        </div>
    </div>
  )
}

export default Footer
