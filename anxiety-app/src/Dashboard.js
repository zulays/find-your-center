import React from "react"
import Affirm from "./Affirm"
import Background from "./Background"
import { Route } from "react-router-dom"



function Dashboard(props) {



  return (
    <div className="dash">
      <Route path="/dashboard">
        <Affirm quote={props.affirm} action={props.func} />
        <Background />
      </Route>

      {/* <Photos /> */}
    </div>
  )
}

export default Dashboard