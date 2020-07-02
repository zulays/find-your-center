import React from "react"
import { Link } from "react-router-dom"



function Dashboard() {

  return (
    <div className="dash" >
      <Link to="/dashboard/affirm"><button className="dash-buttonA">Things get hard, but sparking joy can be as simple as clicking a button</button></Link>
      <Link to="/dashboard/pups"><button className="dash-buttonP">Pups are cute and make you feel happy. You should click to see some </button></Link>
    </div>
  )
}

export default Dashboard