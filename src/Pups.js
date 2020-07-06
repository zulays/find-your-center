import React from "react"
import { Link, withRouter } from "react-router-dom"

function Pups(props) {


  return (
    <>
      <div className="pups">
        {props.guard && <img className="pupImg" src={`https://random.dog/${props.pups}`} alt="puppy" />}
        <button className="pups-button" onClick={props.pupsFunc}>push for puppy</button>
        <Link to="/dashboard"><h5 className="return-text">return to dashboard</h5></Link>
      </div>

    </>
  )
}

export default withRouter(Pups)
