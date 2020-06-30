import React, { useEffect, useState } from "react"
import Affirm from "./Affirm"
import Background from "./Background"
import Pups from "./Pups"
import { Route } from "react-router-dom"



function Dashboard(props) {
  let [color, updateColor] = useState("")
  let [count, updateCount] = useState(0)

  const backgroundStyle = {
    backgroundColor: color
  }

  const defaultBg = {
    backgroundColor: "#000000"
  }

  //   let isRoute
  //   // if (path === "/dashboard") {
  //   return isRoute = true
  // } else {
  //   isRoute = false
  // }


  let time

  const colorChange = () => {
    // for (let i = 0; i < props.colors.length; i++) {
    time = setInterval(() => {
      while (count < props.colors.length) {
        updateCount(count + 1)
        updateColor(props.colors[count].color)
      }
    }, 1000)
    console.log("called")
  }

  useEffect(() => {
    // let time
    time = setInterval(() => {
      colorChange()
    }, 1000)
  }, [])

  // style={isRoute ? backgroundStyle : defaultBg}

  return (
    <div className="dash" style={backgroundStyle}>
      <button onClick={colorChange}>color</button>
      <Route path="/dashboard">
        <Affirm quote={props.affirm} action={props.func} />
        {/* <Background /> */}
        <Pups />
      </Route>

      {/* <Photos /> */}
    </div>
  )
}

export default Dashboard


//put logic in here for bg color
//


//next psteps
//go on set interval
//need to start loop
//randomize indices
//assign to correct div