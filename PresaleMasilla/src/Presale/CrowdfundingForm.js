// src/components/CrowdfundingForm.js
import React, { useState, useEffect } from 'react';
import { initWeb3, depositFunds } from './CrowdfundingContract';
import '../Presale/Presale.css'

const CrowdfundingForm = () => {
    const [amount, setAmount] = useState('');
    const [account, setAccount] = useState('');

    useEffect(() => {
        const init = async () => {
            const success = await initWeb3();
            if (success) {
                const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                setAccount(accounts[0]);
            }
        };
        init();
    }, []);

    const handleDeposit = async (e) => {
        e.preventDefault();
    
        const networkId = await getNetworkId();
    
        // Verificar si Metamask está conectado a la red deseada (534352)
        if (networkId !== 534352) {
            alert('Please connect to Scroll blockchain.');
            return;
        }
    
        if (amount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }
        if (account === '') {
            alert('Please connect your Ethereum wallet.');
            return;
        }
        
        await depositFunds(amount, account);
        setAmount('');
    };
    
    const getNetworkId = async () => {
        if (window.ethereum) {
            try {
                const networkId = await window.ethereum.request({
                    method: 'net_version',
                });
                return parseInt(networkId, 10);
            } catch (error) {
                console.error('Error getting network ID:', error);
                return null;
            }
        } else {
            console.error('Metamask not detected.');
            return null;
        }
    };
    

    return (
        <div>
            <form onSubmit={handleDeposit}>
                <div className='ButtonDashboard2'>
                    <span data-flow="top">
                        <input
                            className='InputContribute'
                            type="number"
                            step="0.01"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                        <button disabled={false}>Contribute</button>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default CrowdfundingForm;
