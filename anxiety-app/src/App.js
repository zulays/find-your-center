import React, { useState } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom"
import Axios from "axios"
import Nav from "./Nav"
import Dashboard from "./Dashboard"
import Footer from "./Footer"
import Welcome from "./Welcome"



function App() {
  let [quote, updateQuote] = useState(false)

  const apiCall = async () => {
    const res = await Axios("https://cors-anywhere.herokuapp.com/https://www.affirmations.dev", { Accept: "application/JSON" })
    console.log(res)
    updateQuote(res.data.affirmation)
  }


  return (
    <div className="app">
      <nav className="nav-bar">
        <Link to="/"><Nav /></Link>
      </nav>
      <main>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard affirm={quote} func={apiCall} />
        </Route>
      </main>

      <footer>
        <Footer />
      </footer>

    </div >
  );
}

export default App;
