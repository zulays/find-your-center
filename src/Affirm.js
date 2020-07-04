import React from "react"
import { Link, withRouter } from "react-router-dom"


function Affirm(props) {

  return (
    <>
      <div className="affirm">
        <p className="quote-cont">{props.affirm}</p>
        <button className="affirm-button" onClick={props.func}>generate an affirmation</button>
        <Link to="/dashboard"><p className="return-text">return to dashboard</p></Link>
      </div>

    </>

  )
}

export default withRouter(Affirm)