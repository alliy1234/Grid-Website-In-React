import React from 'react'

function Working() {
  return (
    <div className='container text-white working mt-5'>
      <h4 className='text-center p-2'>HOW IT WORKS</h4>
      <h3 className='text-center p-3'>Create Better Experiences</h3>
      <h5 className='text-center'>Let GRID take care of event management, so you can focus on the games</h5>
      <div className="row mt-5">
        <div className="col-md-4 text-center">
        <i class="fas fa-home"></i>
        <h2>Visit A Hub</h2>
        <p>Visit hubs to compete in tournaments or join teams and battle together</p>
        </div>
        <div className="col-md-4 text-center">
        <i class="fas fa-gamepad"></i>
        <h2>Start Playing</h2>
        <p>Play all games ranging from Xbox, PlayStation, Nintendo, PC, and Tabletop</p>
        </div>
        <div className="col-md-4 text-center">
        <i class="fas fa-people-carry"></i>
        <h2>Meet New People</h2>
        <p>Find similar friends that will become your battle companions</p>
        </div>
      </div>
    </div>
  )
}

export default Working
