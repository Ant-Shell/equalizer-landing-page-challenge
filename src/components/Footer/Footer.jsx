import './Footer.scss'
import logo from '../../assets/logo.svg'
import facebookLogo from '../../assets/icon-facebook.svg'
import instagramLogo from '../../assets/icon-instagram.svg'
import twitterLogo from '../../assets/icon-twitter.svg'

const Footer = () => {

  return (
    <footer className='footer'>
      <img className='footer-logo' src={logo} alt='Logo'/>
      <p className='footer-message'>
        All rights reserved © Equalizer 2021<br/>
        Have any problems? Contact us via social media or
        email us at<br/>
        <b>equalizer@example.com</b>
      </p>
      <div className='footer-logo-container'>
        <img className='footer-facebook-logo' src={facebookLogo} alt='Facebook logo'/>
        <img className='footer-instagram-logo' src={instagramLogo} alt='Instagram logo'/>
        <img className='footer-twitter-logo' src={twitterLogo} alt='Twitter Logo'/>
      </div>
    </footer>
  )
}

export default Footer
