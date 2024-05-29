import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

import Icons from '../_utils/icons'
import {useGame} from '../_context/context'

export const Chooser = () => {
  return (
    <>
      <span className="flex justify-center items-baseline pb-5">
        <h2 className="uppercase font-bold text-3xl inline">The Game</h2><p className="pl-2 inline font-light">This is totally the game for you!</p>
      </span>
      <div className="relative mx-auto">
        <div className="bg-gray-900 text-white uppercase font-bold text-4xl p-5 h-[400px] w-[800px] z-0 absolute top-[5rem] left-[6rem]">
          <div className="relative top-[88%]">Halo Infinite</div>
          <div className="relative left-[90%] top-[-18%] w-24">
            <div className="BGxbox flex justify-center py-5">
              <Icons icon="xbox" />
            </div>
            <div className="font-light text-2xl flex items-center justify-between px-2 py-2 border-b border-white"><Icons icon="rate-loved" /><span className="hidden">Loved</span>17%</div>
            <div className="font-light text-2xl flex items-center justify-between px-2 py-2 border-b border-white"><Icons icon="rate-recommend" /><span className="hidden">Recommend</span>46%</div>
            <div className="font-light text-2xl flex items-center justify-between px-2 py-2 border-b border-white"><Icons icon="rate-skip" /><span className="hidden">Skip</span>7%</div>
            <div className="font-light text-2xl flex items-center justify-between px-2 py-2 border-b border-white"><Icons icon="rate-playing" /><span className="hidden">Playing</span>110</div>
          </div>
        </div>
        <Image src="/img/halo-inf.jpg" alt="Halo Infinite" width={800} height={400} className="relative z-2 border border-white" />
      </div>
      
      <div className="flex justify-between mt-28">
        <Link href="/"><button type="button" className="border-4 border-gray-900 font-bold rounded-md px-3 py-1"> Back</button></Link>
        <button type="button" className="border-4 border-gray-900 bg-gray-900 text-white font-bold rounded-md px-3 py-1">Choose New Game</button>
    </div>
  </>
  )
}

export default Chooser;