import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

import Aos from "aos";
import "aos/dist/aos.css";

import Logo from '../../images/Logo3.png'

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal, Web3Button } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet, base } from 'wagmi/chains'

const chains = [mainnet, base]
const projectId = process.env.REACT_APP_PROJECT_ID

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)


function Navbar() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <WagmiConfig config={wagmiConfig}>
                <div className='NavbarSection'
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-offset="300"
                    data-aos-delay="500">
                    <div className='NavbarBase'>
                        <div className='NavbarLogo'>
                            <img src={Logo} />
                        </div>
                        <div className='NavbarMenu'>
                            <Link to='/'><p>Home</p></Link>
                            <Link to='/Farm'><p>Farm</p></Link>
                            <Link to='/BoardRoom'><p>Board</p></Link>
                            <Link to='/Presale'><p>Presale</p></Link>
                            <Link to='https://scrollonyx.gitbook.io/scrollonyx/' target='_blank'><p>GitBook</p></Link>

                        </div>

                        <div className='NavbarWeb3'>

                            <div className='BtnConnect'>

                                <Web3Button />

                            </div>
                        </div>

                    </div>
                </div>
            </WagmiConfig>
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient}
                themeVariables={{
                    '--w3m-accent-color': '#BCA37F',
                    '--w3m-accent-fill-color': '#113946',
                    '--w3m-background-color': '#EAD7BB',
                    '--w3m-logo-image-url': 'https://i.imgur.com/idHNUEn.png'
                }}
            />
        </div >
    )
}


export default Navbar