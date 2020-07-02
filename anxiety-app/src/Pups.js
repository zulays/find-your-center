import React from "react"
import { withRouter } from "react-router-dom"

function Pups(props) {


  return (
    <div className="pups">
      {props.guard && <img className="pupImg" src={`https://random.dog/${props.pups}`} alt="puppy" />}
      <button className="pups-button" onClick={props.pupsFunc}>pups</button>
    </div>
  )
}

export default withRouter(Pups)
