import React, { useEffect, useState } from 'react';
import './BoardRoom.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Web3Button, Web3Modal } from '@web3modal/react'

import Onyx from '../../images/onyx.png'

function BoardRoom() {

    const { address, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })

    useEffect(() => {
        Aos.init({ duration: 900 });
    }, []);

    if (isConnected) return <div>
        <div className='BoardRoom'
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-offset="300"
            data-aos-delay="500">
            <h2>BoardRoom</h2>

            <div className='BoardBox'>
                <div className='BoxBoard'>
                    <h3>Next Epoch</h3>
                    <p>00:00:00</p>
                </div>
                <div className='BoxBoard'>
                    <h3>Current Epoch</h3>
                    <p>0</p>
                </div>
                <div className='BoxBoard'>
                    <h3>SNYX PEG (Twap)</h3>
                    <p>0.0000</p>
                    <p>per SNYX</p>
                </div>
                <div className='BoxBoard'>
                    <h3>APR</h3>
                    <p>0%</p>
                </div>
                <div className='BoxBoard'>
                    <h3>SNYX Staked</h3>
                    <p>00.00</p>
                </div>
            </div>

            <div className='BoardClaims'>
                <div className='BoardClaimsBox'>
                    <img src={Onyx} />
                    <h2>0.0000</h2>
                    <p className='BoardGrey'>= $0.00</p>
                    <p className='BoardRed'>SNYX earned</p>
                    <button>Claim Reward</button>
                </div>
                <div className='BoardClaimsBox'>
                    <img src={Onyx} />
                    <h2>0.0000</h2>
                    <p className='BoardGrey'>= $0.00</p>
                    <p className='BoardRed'>SNYX earned</p>
                    <button>Approve SNYX</button>
                </div>
            </div>
        </div>
    </div>
    return <div className='Disclaimer'>
        <h2>Please connect your wallet</h2>
        {/* <CustomButton onClick={() => connect()} /> */}
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

export default BoardRoom;
