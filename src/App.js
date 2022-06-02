import React from 'react';
import { Routes, Route, Link } from "react-router-dom"


import MadLibList from './Pages/MadLibList';
import MadLib from './Pages/MadLib';
import NotFound from './Pages/NotFound';
import styles from './App.module.css';
import { Home } from './Pages/Home';
import IntroTextHome from './components/IntroTextHome';
import OpenHoursHome from './components/OpenHoursHome'


import './App.css';


function App() {
  return (
    <div className="App">
      <header className={styles.header}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Link className={styles.headerLink} to="/">
          Sanity Mad Libs
        </Link>
        </header>
      <IntroTextHome />
      <OpenHoursHome />
       <main className={styles.main}>
       <div className={styles.container}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mad-libs/:slug" element={<MadLib />} />
        <Route path="*" element={<NotFound />} />

        </Routes>
        </div>

    

        </main>
    </div>
  );
}

export default App;
