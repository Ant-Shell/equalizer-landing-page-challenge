import androidIcon from '../../assets/icon-android.svg'
import appleIcon from '../../assets/icon-apple.svg'
import './CallToActionCard.scss'

const CallToActionCard = () => {

  return (
    <section className='cta'>
      <div className='cta-content-container'>
        <h2 className='cta-header-text'>
          Premium EQ
        </h2>
        <p className='cta-info-text'>
          Get expert-level control with a robust
          equalizer, volume mixer, and spatial
          audio. Take your listening experience
          to a whole new level and access
          all our incredible features!
        </p>
        <p className='cta-pricing-text'>
          <span className='cta-pricing-bold'>$4</span>
          <span className='cta-per-month'> / month</span>
        </p>
        <button className='cta-ios-button'>
          <img className='cta-apple-icon' src={appleIcon} alt='Apple icon'/>
          <span>iOS Download</span>
        </button>
        <button className='cta-android-button'>
          <img className='cta-android-icon' src={androidIcon} alt='Android icon'/>
          <span>Android Download</span>
        </button>
      </div>
    </section>
  )
}

export default CallToActionCard