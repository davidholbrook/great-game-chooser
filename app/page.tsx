"use client"

import react, {useState, useEffect} from 'react';
import Icons from './utils/icons';
import PlatformColoring from './utils/platformColoring'
import PlatformBigColoring from './utils/platformBigColoring'

export default function Home() {

  const [items, setItems]:any = useState([])
  const [gameData, setGameData]:any = useState()
  const [nextGame, setNextGame]:any = useState()

  // GameList logic
  function handleAddGame(e:any){
    e.preventDefault();
    const form = document.querySelector(".addGame") as HTMLFormElement;

    const formData = new FormData(form);
    const name = formData.get("game-name") as string;
    const platform = formData.get("game-platform") as string;

    if(name){
      const newGame = {
        id: items.length + 1,
        game: name,
        platform: platform
      }
      setItems([...items, newGame])
    }
  }

  const deleteGame = (id:number) => {
		let newItems = items.filter((item:any) => item.id !== id);
		setItems([...newItems]);
	};

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('games') || '""') ;
    if (items) setItems(items);
  }, []);

  useEffect(() => {
		localStorage.setItem('games', JSON.stringify(items));
	}, [items]);

  // Next Game logic
  const nextGameHandler = () => {
    const number  = items.length;
    const rando = Math.floor(Math.random() * number);
    console.log(rando)
    setNextGame(rando);
    getGamesApi(rando);
  }

  async function getGamesApi(rando:number) {
    const game = items[rando].game;
    const api  = `https://api.rawg.io/api/games?search=${game}&key=${process.env.NEXT_PUBLIC_API_KEY}`

    let gameResults:any = []
    await hitAPI(api).then((data) =>  gameResults.push(data));
    gameResults = gameResults[0].results[0];
    await setGameData(gameResults);

    return gameResults 
  }

  async function hitAPI(url: string): Promise<any> {
    const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer"
    });

    return response.json();
  }

  useEffect(() => {
    if(gameData !== undefined) {
      document.body.style.background = `#000000 url('${gameData.background_image}') no-repeat center / cover`;
      document.body.style.height = "100vh"
      let el:any = document.createElement('div');
      el.classList.add('purpleRain');
      document.body.insertAdjacentElement('afterbegin', el)
    }
  }, [gameData]);

  const screenshotRandomize = () => {
    if(gameData !== undefined ){
      const number = gameData.short_screenshots.length;
      const rando = Math.floor(Math.random() * number);
      return gameData.short_screenshots[rando].image;
    }
  }

 screenshotRandomize()

  return (
   <div className="container mx-auto">
    <h1 className="text-[#fffdfb] text-center font-bold text-3xl pt-14 mb-8">Great Game Chooser</h1> 
    <div className="wrapper">
    {gameData !== undefined ? 
      <div className="nextgame p-10 mb-10 bg-cover min-h-[30vh] md:min-h-[10vh]" style={{background: `rebeccapurple url('${screenshotRandomize()}') no-repeat center / cover`}}
        >
        {Object.keys(items).filter((item, i) => i === nextGame).map((utl:any) => (
          <div className="min-h-[20vh] relative" key={items[utl].id}>
            <h2 className="text-white text-5xl font-bold">{items[utl].game}</h2>
            {PlatformBigColoring(items[utl].platform)}
          </div>
        ))}
        </div>
      : null}
      <div className="gamelist min-h-[60vh]">
        <h2 className="text-black font-bold drop-shadow-sm text-3xl pt-5 mb-8 text-center">Your Game List</h2>
        <div className="w-2/3 mx-auto mt-5">
          {Object.keys(items).map((key, i) => (
            <div className="flex items-center group" key={key}>
              <div className="bg-white border-black border mb-2 p-2 relative grow" >
                {items[key].game}{PlatformColoring(items[key].platform)}
              </div>
              <button type="button" onClick={() => deleteGame(items[key].id)} className="mb-2 ml-2 hidden group-hover:block"><Icons icon="delete" /><span className="hidden">Delete</span></button> 
            </div>
          ))}
          <form className="relative addGame flex items-center" onSubmit={(e) => handleAddGame(e)}>
            <input type="text" name="game-name" className="p-2 w-1/2 border border-black" placeholder='Game Name' />
            <select name="game-platform" aria-label="What platform is the game on" className="item-label border border-gray-900 block w-1/2 p-[0.55rem] ml-[-1px] my-4 ">
            <option value="Xbox">XBOX</option>
            <option value="Playstation">Playstation</option>
            <option value="Nintendo">Nintendo</option>
            <option value="PC">PC</option>
          </select>
            <button type="submit" className="bg-gray-300 px-3 py-2 border-l border-black absolute right-[2px] top-[17px]"><Icons icon="add" /><span className="hidden">Add Game</span></button>
          </form>
          <div className="flex justify-center mt-10">
            <button type="button" onClick={(e) => nextGameHandler()} name="next-game" className="bg-gray-300 py-3 px-5 uppercase font-bold cursor">Choose next game</button>
          </div>
        </div>
      </div>
      </div>
   </div>
  )
}
