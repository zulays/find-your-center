import React from "react"
import { Link, withRouter } from "react-router-dom"


function Count() {

  return (
    <>
      <div className="count">
        <p>Take a moment to find a comfortable spot. <br /> Sit quietly. <br /> Look around you and notice: </p>
        <ul className="count-list">
          <li><span className="nums">5 </span>things you can see</li>
          <li><span className="nums">4 </span> things you can physically feel</li>
          <li><span className="nums">3 </span> things you can hear</li>
          <li><span className="nums">2 </span> things you can hear</li>
          <li><span className="nums">1 </span> thing you can taste</li>
        </ul>
        <Link to="/dashboard"><p className="return-text">return to dashboard</p></Link>
      </div>


    </>
  )
}

export default withRouter(Count)