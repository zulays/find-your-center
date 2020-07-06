import React from "react"
import { Link, withRouter } from "react-router-dom"


function Affirm(props) {

  return (
    <>
      <div className="affirm">
        <p className="quote-text">{props.affirm}</p>
        <button className="affirm-button" onClick={props.func}>spark joy</button>
        <div className="return-text">
          <Link to="/dashboard"><h5>return to dashboard</h5></Link>
        </div>
      </div>
    </>

  )
}

export default withRouter(Affirm)