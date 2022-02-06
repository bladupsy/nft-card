import './card.css';
import NTF from '../../assets/images/image-equilibrium.jpg'
import Eth from '../../assets/images/icon-ethereum.svg'
import Time from '../../assets/images/icon-clock.svg'
import user from '../../assets/images/image-avatar.png'
import view from '../../assets/images/icon-view.svg'

const  Card = () => {
    return (
    <section className='main-elements'>
        <div className='border-card' >
            <div className='card'>
                <div className='card-body'>
                <div className='image-container'>
                    <img src={NTF} alt='eth web frontmentor bladupsy' className='img-card-body'/>
                    <div className='container-view'>
                    <img src={view} alt='icon view' className='icon-text' />
                    </div>
                </div>
                <div className='elements-text'>
                    <div>
                    <h1 className='title-main'>Equilibrium #3429</h1>
                    <p className="text">Our Equilibrium collection promotes balance and calm</p>
                    </div>
                    <div className='pre-footer'>
                        <div>
                            <img src={Eth} alt='icon eth'  />
                            <span className='eth'>0.041ETH</span>
                        </div>
                        <div  className='time-content'>
                            <img src={Time} alt='icon time' className='icon-time' />
                            <span className='text'>3 days left</span>
                        </div>
                    </div>
                    <hr className='line-footer' />
                    <div className='footer-user'>
                        <img src={user} alt='user person' className='user-person'/>
                        <div className='text'>
                            <span className='user-name'>Creation of <b className='name'>Jules Wyvern</b></span>
                        </div>
                    </div>
                    <div class="attribution">
                        Challenge by{" NFT preview card component "}
                            <a className='link' href="https://www.frontendmentor.io?ref=challenge">
                                Frontend Mentor.
                            </a>
                            <div>
                                Coded by <a className='link' href="https://github.com/bladupsy">Bladupsy</a>.
                            </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    </section>
    );
}

export default Card;
