import React from 'react';
import { Routes, Route, Link } from "react-router-dom"


import MadLibList from './Pages/MadLibList';
import MadLib from './Pages/MadLib';
import NotFound from './Pages/NotFound';
import styles from './App.module.css';


import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className={styles.header}>
        <img src={logo} className="App-logo" alt="logo" />
        <Link className={styles.headerLink} to="/">
          Sanity Mad Libs
        </Link>
        </header>

       <main className={styles.main}>
       <div className={styles.container}>
        <Routes>
        <Route path="/" element={<MadLibList />} />
        <Route path="/mad-libs/:slug" element={<MadLib />} />

        <Route path="*" element={<NotFound />} />

        </Routes>
        </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>


        </main>
    </div>
  );
}

export default App;
