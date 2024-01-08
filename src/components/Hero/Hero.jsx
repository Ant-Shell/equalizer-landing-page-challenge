import CallToActionCard from '../CallToActionCard/CallToActionCard'
import phoneImage from '../../assets/illustration-app.png'
import coolImage from '../../assets/bg-pattern-2.svg'
import './Hero.scss'

const Hero = () => {

  return (
    <section className='hero'>
      <img className='hero-phone-image' src={phoneImage} alt="Phone image"/>
      <div className='hero-cool-image-container'>
        <img src={coolImage} />
      </div>
      <div>
        <CallToActionCard/>
      </div>
    </section>
  )
}

export default Hero