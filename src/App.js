import React, { useState } from 'react';
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Error from './pages/Error';
import BoardRoom from './components/BoardRoom';
import Farming from './components/Farming';
import Socialbar from './components/Socialbar';
import Presales from './components/Presale';

import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import Presale from './components/Presale';

const App = () => {

  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet],
    [publicProvider()],
  )

  const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
  })

  return (
    <div className="App">
      <WagmiConfig config={config}>
        <HashRouter>
          <Navbar />
          <Socialbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="BoardRoom" element={<BoardRoom />} />
            <Route path="Presale" element={<Presales />} />
            <Route path="Farm" element={<Farming />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </HashRouter>

      </WagmiConfig>
    </div>
  );
}

export default App;