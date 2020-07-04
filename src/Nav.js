import React from "react"
import { Link, withRouter } from "react-router-dom"

function Nav() {

  return (
    <>
      <ul className="nav">
        <Link to="/"><li className="nav-li">welcome</li></Link>
        <Link to="/dashboard"><li className="nav-li">dashboard</li></Link>
        <Link to="/contact"><li className="nav-li">contact</li></Link>
      </ul>
    </>
  )
}

export default withRouter(Nav)