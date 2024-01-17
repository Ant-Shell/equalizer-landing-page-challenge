import './Header.scss'
import logo from '../../assets/logo.svg'
import coolImage1 from '../../assets/bg-pattern-1.svg'

const Header = () => {
  return (
    <header className='header'>
      <section className='header-left-section'>
        <img className='header-logo' src={logo} alt='Logo'/>
        <h1 className='header-intro-text'>
          We make your music sound extraordinary.
        </h1>
        <p className='header-paragraph'>
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </p>
      </section>
      <section className='header-right-section'>
       <img className='header-cool-image' src={coolImage1} alt='Cool image'/>
      </section>
    </header>
  )
}

export default Header
