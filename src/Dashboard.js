import React from "react"
import { Link } from "react-router-dom"



function Dashboard() {

  return (
    <div className="dash">
      <Link to="/dashboard/affirm">
        <div className="dash-affirm">
          <h3>Affirmation</h3>
          <p className="card-text">things get hard, but finding joy can be as simple as hearing (or reading) a few kinds words</p>
        </div>
        {/* <button className="dash-button">go</button> */}
      </Link>
      <Link to="/dashboard/count">
        <div className="dash-count">
          <h3>Countdown</h3>
          <p className="card-text">grounding yourself in stressful moments can be difficult. sometimes all you need is a little bit of guidance</p>
        </div>
        {/* <button className="dash-button">go</button> */}
      </Link>
      <Link to="/dashboard/pups">
        <div className="dash-pups">
          <h3>Photo</h3>
          <p className="card-text">Dogs are like best friends, always there to hear you out and make you laugh  </p>
        </div>
        {/* <button className="dash-button">go</button> */}
      </Link>

    </div>
  )
}

export default Dashboard