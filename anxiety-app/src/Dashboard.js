import React from "react"
import { Link } from "react-router-dom"



function Dashboard() {

  return (
    <div className="dash" >
      <Link to="/dashboard/affirm"><button>Affirmation</button></Link>
      <Link to="/dashboard/pups"><button>Pups</button></Link>
    </div>
  )
}

export default Dashboard