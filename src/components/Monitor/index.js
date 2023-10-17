import React, { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import '../Monitor/Monitor.css'

import MMask from '../../images/metamask.svg'
import Onyx from '../../images/onyx.png'

const Monitor = () => {

  const [finalNum, setFinalNum] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFinalNum(getRandomNum());
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  function getRandomNum() {
    return Math.floor(Math.random() * (8 - 5 + 1)) + 5;
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>

      <div className='Monitor'
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-offset="300"
        data-aos-delay="500">

        <div className='MonitorWV'>

          <div className='Welcome'>
            <h2>Welcome to ScrollOnyx</h2>
            <p>"ScrollOnyx ($SNYX)" DAO, pegged to the price of $BONE</p>
            <p>ScrollOnyx Finance is an algorithmic stable coin protocol pegged 1:1 to Scroll on Scroll Chain. Much like Basis Cash our protocol uses three tokens (SNYX, SSHRE, SBOND) to incentivize a stable 1:1 peg to USDC.
              The protocol's underlying mechanism dynamically adjusts SNYX supply, pushing its price up or down relative to the price USDC.</p>
            <p className='PLinks'>Read our <a href='https://scrollonyx.gitbook.io/scrollonyx/'>Gitbook</a></p>
            <p>Join our <a href='https://t.me/ScrollOnyx'>Telegram</a> and <a href='https://twitter.com/scrollonyx'> Twitter</a></p>
          </div>

          <div className="VLock">
            <h2>Total Value Locked</h2>
            <p>$0</p>
          </div>
        </div>

        <div className='MonitorBoxSec'>
          <div className='MonitorBoxes'>

            <div className='Boxes'>
              <div className='WCo'>
                <button className='WCoBtn'><span>+ </span><img src={MMask} /></button>
              </div>
              <img src={Onyx} />
              <h2>SNYX</h2>
              <p>1 SNYX (1.0 Peg) =</p>
              <h3>-.---- $SNYX</h3>
              <p>$0 / $SNYX</p>
              <p className='MBSmall'>Market cap: $0</p>
              <p className='MBSmall'>Circulating supply: 44,000</p>
              <p className='MBSmall'>Total supply: 44,000</p>
            </div>

            <div className='Boxes'>
              <div className='WCo'>
                <button className='WCoBtn'><span>+ </span><img src={MMask} /></button>
              </div>
              <img src={Onyx} />
              <h2>SSHRE</h2>
              <p>1 SNYX (1.0 Peg) =</p>
              <h3>-.---- $SSHRE</h3>
              <p>$0 / $SSHRE</p>
              <p className='MBSmall'>Market cap: $0</p>
              <p className='MBSmall'>Circulating supply: 44,000</p>
              <p className='MBSmall'>Total supply: 44,000</p>
            </div>

            <div className='Boxes'>
              <div className='WCo'>
                <button className='WCoBtn'><span>+ </span><img src={MMask} /></button>
              </div>
              <img src={Onyx} />
              <h2>SBOND</h2>
              <p>1 SBOND (1.0 Peg) =</p>
              <h3>-.---- $SBOND</h3>
              <p>$0 / $SBOND</p>
              <p className='MBSmall'>Market cap: $0</p>
              <p className='MBSmall'>Circulating supply: 44,000</p>
              <p className='MBSmall'>Total supply: 44,000</p>
            </div>

          </div>
        </div>



      </div>

    </div>
  )
}

export default Monitor