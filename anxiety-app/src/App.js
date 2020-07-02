import React, { useState, useEffect } from 'react';
import './App.css';
import { Route } from "react-router-dom"
import Axios from "axios"
import Nav from "./Nav"
import Dashboard from "./Dashboard"
import Footer from "./Footer"
import Welcome from "./Welcome"
import colors from "./data/colors.json"
import Affirm from "./Affirm"
import Pups from "./Pups"


function App() {
  let [quote, updateQuote] = useState()
  let [pup, updatePup] = useState()
  let [guard, updateGuard] = useState(false)
  let [color, updateColor] = useState("")

  const apiCall = async () => {
    const res = await Axios("https://cors-anywhere.herokuapp.com/https://www.affirmations.dev", { Accept: "application/JSON" })
    updateQuote(res.data.affirmation)
  }

  const findPup = async () => {
    const response = await Axios("https://random.dog/doggos")
    let randomPup = Math.floor(Math.random() * response.data.length)
    updatePup(response.data[randomPup])
    updateGuard(true)
  }


  const colorChange = () => {
    let randomColor = Math.floor(Math.random() * colors.length)
    updateColor(colors[randomColor].color)
  }

  useEffect(() => {
    let time
    time = setInterval(() => {
      colorChange()
    }, 2000)
  }, [])

  // https://cors-anywhere.herokuapp.com/

  return (
    <div className="app" style={{ backgroundColor: color }}>
      <nav className="nav-bar">
        <Nav />
      </nav>

      <main>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard colors={colors} />
        </Route>
        <Route path="/dashboard/affirm">
          <Affirm affirm={quote} func={apiCall} />
        </Route>
        <Route path="/dashboard/pups">
          <Pups pups={pup} pupsFunc={findPup} guard={guard} />
        </Route>
      </main>

      <footer>
        <Footer />
      </footer>

    </div >
  );
}

export default App;
