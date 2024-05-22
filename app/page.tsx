"use client"

import react, {useState, useEffect} from 'react';
import Image from 'next/image';
import Icons from './utils/icons';

export default function Home() {
// Game Library Page
return(
  <div className="container mx-auto flex flex-col justify-center items-center min-h-screen">
    <Image src="/img/logo.svg" alt="Great Game Chooser logo" width={460} height={50} className="mb-5" />
    <div className="w-10/12 bg-[#CCCCCC] py-5 px-20 dshadows">
      <span className="flex justify-center items-baseline pb-5">
        <h2 className="uppercase font-bold text-3xl inline">Your Library</h2><p className="pl-2 inline font-light">What are you currently playing?</p>
      </span>
    {/* Game 1 */}
    <div className="bg-[#FFFBFB] p-3 flex justify-between mb-3">
      The Last of Us Remastered
      <span className="flex -mr-3">
      <span className="bg-ps flex items-center justify-center -my-3 w-20"><Icons icon="playstation" /></span>
      <span className="bg-deleteRed flex items-center -my-3 px-5"><Icons icon="delete" /></span>
      </span>
    </div>
    {/* Game 2 */}
    <div className="bg-[#FFFBFB] p-3 flex justify-between mb-3">
      Halo 5: Guardians
      <span className="flex -mr-3">
      <span className="bg-xbox flex items-center justify-center -my-3 w-20"><Icons icon="xbox" /></span>
      <span className="bg-deleteRed flex items-center -my-3 px-5"><Icons icon="delete" /></span>
      </span>
    </div>
    {/* Game 3 */}
    <div className="bg-[#FFFBFB] p-3 flex justify-between mb-3">
      Paper Mario: The Thousand Year Door
      <span className="flex -mr-3">
      <span className="bg-nintendo flex items-center justify-center -my-3 w-20"><Icons icon="nintendo" /></span>
      <span className="bg-deleteRed flex items-center -my-3 px-5"><Icons icon="delete" /></span>
      </span>
    </div>
    {/* Game 4 */}
    <div className="bg-[#FFFBFB] p-3 flex justify-between mb-3">
      Civilization 6
      <span className="flex -mr-3">
      <span className="bg-pc flex items-center justify-center -my-3 w-20"><Icons icon="pc" /></span>
      <span className="bg-deleteRed flex items-center -my-3 px-5"><Icons icon="delete" /></span>
      </span>
    </div>
    <div className="flex justify-between mt-6">
      <button type="button" className="border-4 border-gray-900 font-bold rounded-md px-3 py-1">Add New Game</button>
      <button type="button" className="border-4 border-gray-900 bg-gray-900 text-white font-bold rounded-md px-3 py-1">Choose Random Game</button>
    </div>
    </div>
    <div className="credits">Credits</div>
  </div>
  )
}
