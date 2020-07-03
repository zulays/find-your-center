import React from "react"
import { withRouter } from "react-router-dom"


function Count() {

  return (
    <div className="count">
      <p>Take a moment to find a comfortable spot. <br /> Sit quietly. <br /> Look around you and notice: </p>
      <ul>
        <li><span className="nums">5 </span>things you can see</li>
        <li><span className="nums">4 </span> things you can physically feel</li>
        <li><span className="nums">3 </span> things you can hear</li>
        <li><span className="nums">2 </span> things you can hear</li>
        <li><span className="nums">1 </span> thing you can taste</li>
      </ul>
      <p className="text-cont"></p>
      <button className="Count-button">count</button>
    </div>


  )
}

export default withRouter(Count)

// Sit quietly. Look around you and notice:
// 5 things you can see: Your hands, the sky, a plant on your colleague’s desk
// 4 things you can physically feel: Your feet on the ground, a ball, your friend’s hand
// 3 things you can hear: The wind blowing, children’s laughter, your breath
// 2 things you can smell: Fresh-cut grass, coffee, soap
// 1 thing you can taste: A mint, gum, the fresh air