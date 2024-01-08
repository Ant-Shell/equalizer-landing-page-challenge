import './CallToActionCard.scss'

const CallToActionCard = () => {

  return (
    <section className='cta'>
      <div className='cta-content-container'>
        <h2 className='cta-header-text'>
          Premium EQ
        </h2>
        <p className='cta-info-text'>
          Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take
          your listening experience to a whole new level and access all our incredible features!
        </p>
        <p className='cta-pricing-text'>
          <span className='cta-pricing-bold'>$4</span><span>/ month</span>
        </p>
        <button className='cta-ios-button'>iOS Download</button>
        <button className='cta-android-button'>Android Download</button>
      </div>
    </section>
  )
}

export default CallToActionCard