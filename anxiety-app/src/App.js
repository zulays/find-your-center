import React, { useState, useEffect } from 'react';
import './App.css';
import { Route } from "react-router-dom"
import Axios from "axios"
import Nav from "./Nav"
import Dashboard from "./Dashboard"
import Footer from "./Footer"
import Welcome from "./Welcome"
import colors from "./data/colors.json"


function App() {
  let [quote, updateQuote] = useState()
  // let [color, updateColor] = useState("")
  let [pup, updatePup] = useState()
  let [guard, updateGuard] = useState(false)

  const apiCall = async () => {
    const res = await Axios("https://cors-anywhere.herokuapp.com/https://www.affirmations.dev", { Accept: "application/JSON" })
    console.log(res)
    updateQuote(res.data.affirmation)
  }

  const findPup = async () => {
    const response = await Axios("https://random.dog/doggos")
    let randomPup = Math.floor(Math.random() * response.data.length)
    updatePup(response.data[randomPup])
    console.log(response.data[randomPup])
    updateGuard(true)
  }



  return (
    <div className="app">
      <nav className="nav-bar">
        <Nav />
      </nav>
      <main>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard affirm={quote} func={apiCall} colors={colors} pups={pup} pupsFunc={findPup} guard={guard} />
        </Route>
      </main>

      <footer>
        <Footer />
      </footer>

    </div >
  );
}

export default App;


//set conditional just check what route it's on 

  //function that loops through json data 
  //on setTimeout
  //declare a variable for inline styling syntax
  //in function, everytime it iterates update state 
  //set state to the color hex code
  //call function in useEffect
  //aadd event listener to be able to click and change
  //ternery to check route : backgroundStyle ? "" : ""

  // const backgroundStyle = {
  //   backgroundColor: { color }
  // }

  // const defaultBg = {
  //   backgroundColor: "#000000"
  // }

  // let location = useLocation()
  // // console.log(location.pathname)
  // let path = location.pathname
  // console.log(path)

  // let isRoute
  // if (path === "/dashboard") {
  //   return isRoute = true
  // } else {
  //   isRoute = false
  // }

  // let time


  // const colorChange = () => {
  //   {
  //     colors.map(color =>
  //       time = setTimeout(() => {
  //         updateColor(color.color)
  //       }, 1000)
  //     )
  //   }
  // }


  // useEffect(() => {
  //   colorChange()
  // }, [])
