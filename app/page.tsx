"use client"

import react from 'react';
import Link from 'next/link';

import Icons from './_utils/icons';
import {useGame} from './_context/context';

export default function Home() {
const {items, setItems} = useGame();

  function deleteItem(id:number) {
    let newItems = items.filter((item:any) => item.id !== id);
    setItems([...newItems]);
    console.log(id)
}

// Game Library Page
return(
    <>
      <span className="flex justify-center items-baseline pb-5">
        <h2 className="uppercase font-bold text-3xl inline">Your Library</h2><p className="pl-2 inline font-light">What are you currently playing?</p>
      </span>
      {Object.keys(items).map((key, i) => (
        <div className="bg-[#FFFBFB] p-3 flex justify-between mb-3 border border-gray-400" key={key}>
          {items[key].game}
          <span className="flex -mr-3">
            <span className={`BG${items[key].platform} flex items-center justify-center -my-3 w-20`}><Icons icon={items[key].platform} /></span>
            <button type="button" className="bg-deleteRed flex items-center -my-3 px-5 border-l border-gray-700" onClick={() => deleteItem(items[key].id)}><Icons icon="delete" /><span className="hidden">Delete</span></button>
          </span>
        </div>
      ))}
      <div className="flex justify-between mt-6">
        <Link href="/addgame"><button type="button" className="border-4 border-gray-900 font-bold rounded-md px-3 py-1">Add New Game</button></Link>
        <button type="button" className="border-4 border-gray-900 bg-gray-900 text-white font-bold rounded-md px-3 py-1">Choose Random Game</button>
    </div>
  </>
  )
}
