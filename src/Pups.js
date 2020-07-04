import React from "react"
import { Link, withRouter } from "react-router-dom"

function Pups(props) {


  return (
    <>
      <div className="pups">
        {props.guard && <img className="pupImg" src={`https://random.dog/${props.pups}`} alt="puppy" />}
        <button className="pups-button" onClick={props.pupsFunc}>select for a puppy photo</button>
        <Link to="/dashboard"><p className="return-text">return to dashboard</p></Link>
      </div>

    </>
  )
}

export default withRouter(Pups)
