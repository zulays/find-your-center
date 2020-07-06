import React from "react"
import { Link } from "react-router-dom"



function Dashboard() {

  return (
    <>
      <div className="title">
        {/* <h2>Select the tool you'd like to use today</h2> */}
      </div>

      <div className="dash">
        <Link to="/dashboard/affirm">
          <div className="dash-affirm"></div>
        </Link>
        <Link to="/dashboard/count">
          <div className="dash-count"></div>
        </Link>
        <Link to="/dashboard/pups">
          <div className="dash-pups"></div>
        </Link>

      </div>
    </>
  )
}

export default Dashboard