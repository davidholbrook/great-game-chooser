"use client"

import react, {useState, useEffect} from 'react';

export default function Home() {

  const [items, setItems]:any = useState({})

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('game'));
    if (items) {
     setItems(items);
    }
  }, []);

  const platformColoring = (platform:string) => {
    switch(platform){
      case("Xbox"):
        return <span className="bg-[#107C10] absolute right-0 top-0 h-full px-5 pt-2 text-white">Xbox</span>
      case("Playstation"):
        return <span className="bg-[#2E6DB4] absolute right-0 top-0 h-full px-5 pt-2 text-white">Playstation</span>
      case("Nintendo"):
        return <span className="bg-[#E60012] absolute right-0 top-0 h-full px-5 pt-2 text-white">Nintendo</span>
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
            <div className="bg-white border-black border mb-2 p-2 relative" key={key}>
              {items[key].game} {platformColoring(items[key].platform)}
            </div>
          ))}
          <div className="flex justify-center mt-10">
            <button type="button" className="bg-gray-300 py-3 px-5 uppercase font-bold cursor">Choose next game</button>
          </div>
        </div>
      </div>
   </div>
  )
}
