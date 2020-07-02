import React from "react"
import { withRouter } from "react-router-dom"


function Footer() {

  return (
    <>
      <p className="name">Zulay Scottborgh &copy;</p>
      <a href="https://github.com/zulays"><img className="icons" src="https://res.cloudinary.com/zumariposa/image/upload/v1593482664/GitHub-Mark-32px_vnsuuy.png" alt="github-page" /></a>
      <a href="https://www.linkedin.com/in/zulay-scottborgh/"><img className="icons" src="https://res.cloudinary.com/zumariposa/image/upload/c_scale,w_32/v1593482664/LI-In-Bug_ptyigb.png" alt="linkedin-page" /></a>
      <br />
      <p className="citations">Powered by <a href="https://github.com/annthurium/affirmations">affirmations, </a><a href="https://random.dog/">random dog, </a> and</p><img className="icons" src="https://res.cloudinary.com/zumariposa/image/upload/v1593706958/heart-icon_ofegaj.png" alt="love-icon" />
    </>
  )
}

export default withRouter(Footer)