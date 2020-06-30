import React from "react"
import { withRouter } from "react-router-dom"

function Pups(props) {

  return (
    <div className="Pups">
      <p className="quote-cont">{props.quote}</p>
      <button className="pups-button" onClick={props.action}>pups</button>
    </div>
  )
}

export default withRouter(Pups)