import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [games] = useState({
    game: [
      {id:0, title:"What game will you play?"},
      {id:1, title:"Far Cry 6"},
      {id:2, title:"arkham knight"},
      {id:3, title:"pokemon red"},
      {id:4, title:"pokemon scarlet"},
      {id:4, title:"pokemon diamond"},
      {id:4, title:"super mario odysee"}

    ]
  });

  const [number, setNumber] = useState(0);
  const [apigame, setApigame] = useState(null);

  const genNumber = () => {
    setNumber(Math.floor(Math.random() * games.game.length));
    setApigame(number)
  };
  
  useEffect(() => {
    let gap = {
      game: '',
      name: '',
      artwork: '',
    }

    if(number !== 0){
      Promise.all([
        fetch(
          "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/search",
          { method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Client-ID': 'waoicxsjb4sjyk8ryhtptfci9uq2sf',
              'Authorization': 'Bearer mygerhwaobec8ob9nj57h4kq15vyto',
            },
            body: "fields *; search 'sonic the hedgehog'; limit 1;"
        }
        )
        .then(res => res.text)
        .then(reu => console.log(reu))
        .catch(err => {
          console.log(err)
        })
      ])
  }
  }, [apigame]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>
        <h1 className="text-3xl font-bold text-orange-500 text-center mb-5">Random Game Chooser</h1>
        <div className="bg-white w-[350px] h-[150px] flex justify-center items-center">
          <p className='text-black text-lg uppercase font-bold'>{games.game[number].title}</p>
        </div>
      </div>

      <div>
        <button className='border border-white text-white py-2 px-5 mt-5 rounded-xl' onClick={genNumber}>What Should I Play?</button>
      </div>
    </div>
  )
}

export default App;
