// import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Navbar from './components/Navbar';
import Content from './components/Content';
import Color from './components/page/Color';
import Typography from './components/page/Typography';
import Calendar from './components/page/calendar';
import Apps from './components/page/apps';
import Map from './components/page/map';
import Notifications from './components/page/notifications';
import MyChart from './components/page/chart';
import Pages from './components/page/pages';
import Smart from './components/page/smart';
import Widget from './components/page/widget';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='app'>
        <Header />
        <Navbar />



        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/Color" element={<Color />} />
          <Route path="/Typography" element={<Typography />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/map" element={<Map />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/smart" element={<Smart />} />
          <Route path="/widget" element={<Widget />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/charts" element={<MyChart />} />
        </Routes>

        <Footer />
      </div>
    </>
  )
}

export default App
