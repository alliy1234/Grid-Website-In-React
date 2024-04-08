import React from 'react'
import game from "../iamge/gameon.png"
function Gameon() {
  return (
    <div className='container game'>
      <div className="row">
        <div className="col-md-6 text-white d-flex justify-content-center align-center flex-column">
            <h1>Game on</h1>
            <p>GRID Makes It Easy To Find Local Community Gaming Events. You Can Create Or Join eSports Teams And Explore Gaming HUBs Near You To Participate In Tournaments.</p>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-center">
            <img src={game} alt="" className='img-fluid' />
        </div>
      </div>
    </div>
  )
}

export default Gameon
