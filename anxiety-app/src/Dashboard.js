import React, { useEffect, useState } from "react"
import Affirm from "./Affirm"
// import Background from "./Background"
import Pups from "./Pups"
import { Route } from "react-router-dom"



function Dashboard(props) {
  let [color, updateColor] = useState("")

  const colorChange = () => {
    let randomColor = Math.floor(Math.random() * props.colors.length)
    updateColor(props.colors[randomColor].color)
    console.log(props.colors[randomColor].color)
    console.log("called")
  }

  useEffect(() => {
    let time
    // time = setInterval(() => {
    //   colorChange()
    // }, 1000)
  }, [])

  // style={isRoute ? backgroundStyle : defaultBg}

  return (
    <div className="dash" style={{ backgroundColor: color }}>
      {/* <button onClick={colorChange}>color</button> */}
      <Route path="/dashboard">
        <Affirm affirm={props.affirm} func={props.func} />

        <Pups pups={props.pups} pupsFunc={props.pupsFunc} guard={props.guard} />


      </Route>
    </div>
  )
}

export default Dashboard


//put logic in here for bg color
//

  // const defaultBg = {
  //   backgroundColor: "#000000"
  // }
