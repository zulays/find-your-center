import React from "react"
import { withRouter } from "react-router-dom"

function Contact() {

  return (
    <div className="contact-form">
      <form>
        <input type="text" placeholder="Leave your suggestions" />
        <button>submit</button>
      </form>
    </div>
  )
}

export default withRouter(Contact)