"use client"

import react, {useState, useEffect} from 'react';
import Icons from './utils/icons';

export default function Home() {

  const [items, setItems]:any = useState([])

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
    console.log(id)
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

  const platformColoring = (platform:string) => {
    switch(platform){
      case("Xbox"):
        return <span className="bg-[#107C10] absolute right-0 top-0 h-full px-5 pt-2 text-white">Xbox</span>
      case("Playstation"):
        return <span className="bg-[#2E6DB4] absolute right-0 top-0 h-full px-5 pt-2 text-white">Playstation</span>
      case("Nintendo"):
        return <span className="bg-[#E60012] absolute right-0 top-0 h-full px-5 pt-2 text-white">Nintendo</span>
      case("PC"):
        return <span className="bg-[#333333] absolute right-0 top-0 h-full px-5 pt-2 text-white">PC</span>
      default:
        return null;
    }
  }
  
  return (
   <div className="container mx-auto">
    <h1 className="text-[#fffdfb] text-center font-bold text-3xl pt-14 mb-8">Great Game Chooser</h1>
      <div className="gamelist min-h-[60vh]">
        <h2 className="text-black font-bold drop-shadow-sm text-3xl pt-5 mb-8 text-center">Your Game List</h2>
        <div className="w-2/3 mx-auto mt-5">
          {Object.keys(items).map((key, i) => (
            <div className="flex items-center group" key={key}>
              <div className="bg-white border-black border mb-2 p-2 relative grow" >
                {items[key].game}{platformColoring(items[key].platform)}
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
            <button type="button" className="bg-gray-300 py-3 px-5 uppercase font-bold cursor">Choose next game</button>
          </div>
        </div>
      </div>
   </div>
  )
}
