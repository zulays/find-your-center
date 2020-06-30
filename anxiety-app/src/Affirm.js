import React from "react"
import { withRouter } from "react-router-dom"

function Affirm(props) {

  return (
    <div className="affirm">
      <p className="quote-cont">{props.quote}</p>
      <button className="affirm-button" onClick={props.action}>AOTD</button>
    </div>
  )
}

export default withRouter(Affirm)