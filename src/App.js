import './App.css';
import { useState } from 'react';

function App() {
  const [games] = useState({
    game: [
      {id:1, title:"farcry6"},
      {id:2, title:"arkham knight"},
      {id:3, title:"pokemon red"},
      {id:4, title:"pokemon scarlet"}
    ]
  })

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-2xl text-orange-200">Random Game Chooser</h1>
        <p className='text-white'>{games.game[3].title}</p>
      </div>
    </div>
  )
}

export default App;
