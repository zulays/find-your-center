import React from "react"
import { withRouter } from "react-router-dom"


function Footer() {

  return (
    <>
      <a href="https://github.com/zulays"><img src="https://res.cloudinary.com/zumariposa/image/upload/v1593482664/GitHub-Mark-32px_vnsuuy.png" alt="github-page" /></a>
      <p>Zulay Scottborgh &copy;</p>
      <a href="https://www.linkedin.com/in/zulay-scottborgh/"><img src="https://res.cloudinary.com/zumariposa/image/upload/c_scale,w_32/v1593482664/LI-In-Bug_ptyigb.png" alt="linkedin-page" /></a>
      <br />
      <p>Powered by <a href="">affirmations and </a><a href="">random dog</a></p>
    </>
  )
}

export default withRouter(Footer)