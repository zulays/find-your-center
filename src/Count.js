import React from "react"
import { Link, withRouter } from "react-router-dom"


function Count() {

  return (
    <>
      <div className="count">
        <h3 className="count-text">Take a moment to find a comfortable spot. </h3>
        <h3 className="count-text">Sit quietly. </h3>
        <h3 className="count-text">Look around you and notice:</h3>

        <div className="count-down"> <p className="count-list"><span className="nums">5 </span>things you can see</p>
          <p className="count-list"><span className="nums">4 </span> things you can physically feel</p>
          <p className="count-list"><span className="nums">3 </span> things you can hear</p>
          <p className="count-list"><span className="nums">2 </span>things you can smell</p>
          <p className="count-list"><span className="nums">1 </span> things you can taste</p>
        </div>
        <Link to="/dashboard"><p className="return-text">return to dashboard</p></Link>
      </div>




    </>
  )
}

export default withRouter(Count)