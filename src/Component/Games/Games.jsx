import React from 'react'
import Game from './Game/Game'
import './Games.css'



const Games = ({games}) => {
    return (
        <div className='bigCont'>
            <div>
                <div className='flex'>
                    {games.map((game=>(
                        <Game game={game}/>
                    )))}
                </div>
            </div>
        </div>
    )
}

export default Games
