import React from "react"
import { Link, withRouter } from "react-router-dom"


function Contact(props) {

  return (
    <>
      <div className="contact">
        <input type="text" placeholder="message" />
        <button className="contact-button">submit</button>
      </div>

    </>

  )
}

export default withRouter(Contact)