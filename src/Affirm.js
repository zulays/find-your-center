import React from "react"
import { withRouter } from "react-router-dom"


function Affirm(props) {

  return (
    <div className="affirm">
      <p className="quote-cont">{props.affirm}</p>
      <button className="affirm-button" onClick={props.func}>AOTD</button>
    </div>


  )
}

export default withRouter(Affirm)