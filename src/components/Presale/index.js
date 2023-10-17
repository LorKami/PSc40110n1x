import React, { useEffect, useState } from 'react';
import './Presale.css'

// import CrowdfundingForm from './CrowdfundingForm';
// import CrowdfundingInfo from './CrowdfundingInfo';

import Aos from "aos";
import "aos/dist/aos.css";
import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Web3Button, Web3Modal } from '@web3modal/react'

function getCurrentUTCTime() {
    const date = new Date();
    const options = {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC',
        timeZoneName: 'short',
    };
    const formattedTime = date.toLocaleString('en-US', options);
    return formattedTime;
}

const currentTime = getCurrentUTCTime();
console.log(currentTime);

const Presale = () => {

    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const currentTime = getCurrentUTCTime();
        setCurrentTime(currentTime);
    }, []);

    const { address, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })

    useEffect(() => {
        Aos.init({ duration: 900 });
    }, []);

    if (isConnected) return <div>

        <div className='PresaleSec'>

            <div className='PresaleTitle'>
                <h3>SNYX Presale</h3>
                <p>Purchase tokens at launch price</p>
            </div>

            <div className='PresaleBoxSec'>

                <div className='PresaleBox'>


                    <div className='BoxLeft'>

                        <div className='PresaleTime'>
                            <h3>Presale Time</h3>
                            <p>Start: Sat, 5 Aug 2023, 13:00:00 UTC</p>
                            <p>End: Sun, 6 Aug 2023, 13:00:00 UTC</p>
                        </div>

                        <div className='Current'>
                            <h3>Current Time</h3>
                            <p>{currentTime}</p>
                        </div>

                    </div>

                    <div className='PresaleCurrentStatus'>



                        <div className='Status'>
                            <h3>Presale Status</h3>
                            <p>SOON...</p>
                        </div>


                        <div className='PresaleContributionBOHM'>
                            <div className='Contribution'>
                                {/* <CrowdfundingInfo /> */}
                            </div>
                        </div>

                        <div className='CrowdfundingContainer'>
                            {/* <CrowdfundingForm /> */}
                        </div>

                        <div className='ButtonDashboard'>
                            <span data-tooltip="Coming soon" data-flow="top"><button>Claim</button></span>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
    return <div className='Disclaimer'>
        <h2>Please connect your wallet</h2>
        <Web3Button />
        <Web3Modal
            themeVariables={{
                '--w3m-accent-color': '#BCA37F',
                '--w3m-accent-fill-color': '#113946',
                '--w3m-background-color': '#BCA37F',
                '--w3m-logo-image-url': 'https://i.imgur.com/idHNUEn.png'
            }}
        />
    </div>
}


export default Presale