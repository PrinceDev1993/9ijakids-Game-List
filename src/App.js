import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Footer from './Component/Footer/Footer'
import Games from './Component/Games/Games'
import {SiNintendogamecube} from 'react-icons/si'



function App() {
  const [games, setGames] = useState([])
  // input state
  const [q, setQ] = useState('')
   //Group dropdown state
   const [group, setGroup] = useState('')
   //Level dropdown state
   const [level, setLevel] = useState('')

  const url = `https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter`;

  useEffect(() => {
    axios.get(url)
    .then(res => {
      setGames(res.data)
     
    })
    .catch(err => console.log(err))
    
  }, [url])

  console.log(games);

  console.log(group);
  console.log(level);

  const inputFilterGame = games.filter(game => {
    return game.Topic.toLowerCase().includes(q.toLowerCase())
  })

  const levelFilterGame = inputFilterGame.filter(game=> {
    return game.Level.toLowerCase().includes(level.toLowerCase())
  })

  const groupFilterGame = levelFilterGame.filter(game=> {
    return game.Group.toLowerCase().includes(group.toLowerCase())
  })

  return (
    <div className="Ap">
      <div className="appBar">
        <p className='appTitle'>9ijakids Game List <SiNintendogamecube className='logo' /></p>

        <div className='appSearch'>
          <input type="text" value={q} onChange={(e)=>setQ(e.target.value)}
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            className='appInput'
          />

          <select name="cars" id="sel" onChange={(e)=>setGroup(e.target.value, "")}>
            <option value="" selected='selected'>Choose your Group</option>
            {games.map((game,index)=><option value={game.Group} key={index}>{game.Group}</option>)}
          </select>

          <select name="cars" id="sel" onChange={(e)=>setLevel(e.target.value, "")}>
            <option value="" selected='selected'>Choose your Level</option>
            {games.map((game,index)=><option value={game.Level} key={index}>{game.Level}</option>)}
          </select>

        </div>
      </div>

      <Games games={groupFilterGame} />
      <Footer />
      
    </div>
  );
}

export default App;

