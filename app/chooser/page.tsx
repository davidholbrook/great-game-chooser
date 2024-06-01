'use client'
import React, {useState, useEffect, useMemo} from 'react';
import Link from 'next/link';
import Image from 'next/image'

import Icons from '../_utils/icons'
import {useGame} from '../_context/context'

export const Chooser = () => {

  const {items} = useGame();
  const [randomGame, setRandomGame] = useState()
  const [gameData, setGameData] = useState()

  useEffect( () => {
    const randomGame = items[~~(Math.random() * items.length)];
    setRandomGame(randomGame)
  }, [items, setRandomGame])

useEffect(() => {
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

  async function getGamesApi(randomGame:Object) {
    const game = randomGame['game'];
    console.log(game)
    const api  = `https://api.rawg.io/api/games?search=${game}&key=${process.env.NEXT_PUBLIC_API_KEY}`

    let gameResults:any = []
    await hitAPI(api).then((data) =>  gameResults.push(data));
    gameResults = gameResults[0].results[0];
    await setGameData(gameResults);
  }
  getGamesApi(randomGame)
}, [randomGame])

function MthFloor(number:number){
  return Math.floor(number);
}

  return (
    <>
      <span className="flex justify-center items-baseline pb-5">
        <h2 className="uppercase font-bold text-3xl inline">The Game</h2><p className="pl-2 inline font-light">This is the game for you!</p>
      </span>
      
      {(gameData != null) ?
      <div className="relative left-[50%] ml-[-450px]">
        <div className="bg-gray-900 text-white uppercase font-bold text-4xl p-5 h-[400px] w-[800px] z-0 absolute top-[5rem] left-[6rem]">
          <div className="relative top-[88%]">{gameData.name}</div>
          <div className="relative left-[90%] top-[-18%] w-24">
            <div className={`BG${randomGame.platform} flex justify-center py-5`}>
              <Icons icon={randomGame.platform} />
            </div>
            <div className="font-light text-2xl flex items-center justify-between px-2 py-2 border-b border-white"><Icons icon="rate-loved" /><span className="hidden">Loved</span>{MthFloor(gameData.ratings[1].percent)}%</div>
            <div className="font-light text-2xl flex items-center justify-between px-2 py-2 border-b border-white"><Icons icon="rate-recommend" /><span className="hidden">Recommend</span>{MthFloor(gameData.ratings[0].percent)}%</div>
            <div className="font-light text-2xl flex items-center justify-between px-2 py-2 border-b border-white"><Icons icon="rate-skip" /><span className="hidden">Skip</span>{MthFloor(gameData.ratings[3].percent)}%</div>
            <div className="font-light text-2xl flex items-center justify-between px-2 py-2 border-b border-white"><Icons icon="rate-playing" /><span className="hidden">Playing</span>{MthFloor(gameData.added_by_status.playing)}</div>
          </div>
        </div>
        <div className="h-[400px] w-[800px] relative">
          <Image src={gameData.background_image} alt="Halo Infinite" layout="fill" className="relative z-2 border border-white" />
        </div>
      </div>
      : null}

      <div className="flex justify-between mt-28">
        <Link href="/"><button type="button" className="border-4 border-gray-900 font-bold rounded-md px-3 py-1"> Back</button></Link>
        {/* <button type="button" className="border-4 border-gray-900 bg-gray-900 text-white font-bold rounded-md px-3 py-1">Choose New Game</button> */}
    </div>
  </>
  )
}

export default Chooser;