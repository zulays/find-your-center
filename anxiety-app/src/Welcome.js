import React from "react"
import { Link, withRouter } from "react-router-dom"

function Welcome() {

  return (
    <div className="welcome-page">
      <h1>find your center</h1>
      <h4>an app designed to provide you with options to ground yourself and find relief from those stressful life moments</h4>
      <Link to="/dashboard"><button className="welcome-button">Enter</button></Link>
    </div>
  )
}

export default withRouter(Welcome)