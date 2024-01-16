import CallToActionCard from '../CallToActionCard/CallToActionCard'
import phoneImage from '../../assets/illustration-app.png'
import coolImage2 from '../../assets/bg-pattern-2.svg'
import './Hero.scss'

const Hero = () => {

  return (
    <section className='hero'>
      <img className='hero-phone-image' src={phoneImage} alt="Phone image"/>
      <div className='hero-cool-image-container'>
        <img className='hero-cool-image' src={coolImage2} alt="Cool image" />
      </div>
      <div>
        <CallToActionCard/>
      </div>
    </section>
  )
}

export default Hero