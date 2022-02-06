import './card.css';
import NTF from '../../assets/images/image-equilibrium.jpg'
import Eth from '../../assets/images/icon-ethereum.svg'
import Time from '../../assets/images/icon-clock.svg'
import user from '../../assets/images/image-avatar.png'

const  Card = () => {
    return (
    <section className='main-elements'>
        <div className='border-card' >
            <div className='card'>
                <div className='card-body'>
                <div>
                    <img src={NTF} alt='eth web frontmentor bladupsy' className='img-card-body'/>
                </div>
                <div className='elements-text'>
                    <div>
                    <h1>Equilibrium #3429</h1>
                    <p className="text">Our Equilibrium collection promotes balance and calm</p>
                    </div>
                    <div className='pre-footer'>
                        <div>
                            <img src={Eth} alt='icon eth'  />
                            <span className='eth'>0.041ETH</span>
                        </div>
                        <div  className='time-content'>
                            <img src={Time} alt='icon time' />
                            <span className='text'>3 days left</span>
                        </div>
                    </div>
                    <hr />
                    <div className='footer-user'>
                        <img src={user} alt='user person' className='user-person'/>
                        <span className='text'>Creation of <b>Jules Wyvern</b></span>
                    </div>
                </div>
                </div>
            </div>
        </div>

    </section>
    );
}

export default Card;
