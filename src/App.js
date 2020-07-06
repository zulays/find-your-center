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
import Count from "./Count"


function App() {
  let [quote, updateQuote] = useState()
  let [pup, updatePup] = useState()
  let [guard, updateGuard] = useState(false)
  let [color, updateColor] = useState("")

  const apiCall = async () => {
    try {
      const res = await Axios("https://cors-anywhere.herokuapp.com/https://www.affirmations.dev")
      updateQuote(res.data.affirmation)
    } catch (error) {
      updateQuote(
        [
          "You got this",
          "You'll figure it out",
          "You're a smart cookie",
          "I believe in you",
          "Sucking at something is the first step towards being good at something",
          "Struggling is part of learning",
          "Everything has cracks - that's how the light gets in",
          "Mistakes don't make you less capable",
          "We are all works in progress",
          "You are a capable human",
          "You know more than you think",
          "10x engineers are a myth",
          "If everything was easy you'd be bored",
          "I admire you for taking this on",
          "You're resourceful and clever",
          "You'll find a way",
          "I know you'll sort it out",
          "Struggling means you're learning",
          "You're doing a great job",
          "It'll feel magical when it's working",
          "I'm rooting for you",
          "Your mind is full of brilliant ideas",
          "You make a difference in the world by simply existing in it",
          "You are learning valuable lessons from yourself every day",
          "You are worthy and deserving of respect",
          "You know more than you knew yesterday",
          "You're an inspiration",
          "Your life is already a miracle of chance waiting for you to shape its destiny",
          "Your life is about to be incredible",
          "Nothing is impossible. The word itself says 'I’m possible!'",
          "Failure is just another way to learn how to do something right",
          "I give myself permission to do what is right for me",
          "You can do it",
          "It is not a sprint, it is a marathon. One step at a time",
          "Success is the progressive realization of a worthy goal",
          "People with goals succeed because they know where they’re going",
          "All you need is the plan, the roadmap, and the courage to press on to your destination",
          "The opposite of courage in our society is not cowardice... it is conformity",
          "Whenever we’re afraid, it’s because we don’t know enough. If we understood enough, we would never be afraid",
          "The past does not equal the future",
          "The path to success is to take massive, determined action",
          "It’s what you practice in private that you will be rewarded for in public",
          "Small progress is still progress",
          "Don't worry if you find flaws in your past creations, it's because you've evolved",
          "Starting is the most difficult step - but you can do it",
          "Don't forget to enjoy the journey",
          "It's not a mistake, it's a learning opportunity",
        ]
      )
    }
  }

  const findPup = async () => {
    const response = await Axios("https://random.dog/doggos")
    let randomPup = Math.floor(Math.random() * response.data.length)
    updatePup(response.data[randomPup])
    updateGuard(true)
  }


  //slows down the loop to allow color to be rendered
  //guidance from https://flaviocopes.com/how-to-slow-loop-javascript/
  const slow = (ms) => {
    return new Promise(slowDown => setInterval(slowDown, ms))
  }

  const colorChange = async () => {
    for (let i = 0; i < colors.length; i++) {
      if (i === colors.length - 1) {
        await slow(2000)
        updateColor(colors[i].color)
        i = 0
      } await slow(2000)
      updateColor(colors[i].color)
    }
  }


  useEffect(() => {
    colorChange()
  }, [])


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
        <Route path="/dashboard/count">
          <Count />
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
