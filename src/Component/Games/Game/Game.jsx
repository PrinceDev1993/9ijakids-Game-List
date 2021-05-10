import React from 'react'
import './Game.css'

const Game = ({game}) => {
    return (
        <div>
            <div className='gameDiv'>
                <img className='gameImage' src={game.GameImage} alt="" />
                <div>
                    <p className='gameTitle'>{game.GameTitle}</p>
                    <p className='gameDesc'>{game.GameDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default Game
