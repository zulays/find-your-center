import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Route, Link, Switch } from "react-router-dom"
import Axios from "axios"

function App() {
  let [background, updateBackground] = useState()
  let [color, updateColor] = useState()

  const callApi = async () => {
    const response = await Axios("https://cors-anywhere.herokuapp.com/https://www.affirmations.dev", { Accept: "application/JSON" })
    console.log(response)
    updateBackground(response.data.affirmation)

    // "Accept: application/json" 
    // https://cors-anywhere.herokuapp.com/https://gradientapi.xyz/gradient/w/1000/h/500/start/b5e2bf/end/0f74c6
    // "https://cors-anywhere.herokuapp.com/http://www.colourlovers.com/api/palettes/hueOption/blue"
    // 

  }

  const changeBg = async () => {
    // const res = await Axios("http://api.creativehandles.com/getRandomColor")
    // console.log(res)
    // updateColor(res.data.color)
  }

  useEffect(() => {
    callApi()
    changeBg()
  }, [])


  return (
    <div className="container" style={{ backgroundColor: color }}>
      <h1 onChange={changeBg}>{background}</h1>
      <button onClick={callApi} >do stuff</button>

    </div>
  );
}

export default App;
