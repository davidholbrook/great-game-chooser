"use client"
import React, {useState} from "react";
import Link from "next/link"

import Icons from "../utils/icons";
import {useGame} from '../_context/context'

export const AddGame = () => {
  const {items, setItems} = useGame();
  const [toast, setToast] = useState('')
  function handleAddGame(e:any) {
    e.preventDefault();

    const form = document.querySelector(".addGameForm") as HTMLFormElement;

    const formData = new FormData(form);
    const name = formData.get("game-name") as string;
    const platform = formData.get("game-platform") as string;
    const randonum:number = Math.round(new Date().getTime() / 1000);

    if(name){
      const newGame:any = {
        id: randonum,
        game: name,
        platform: platform
      }
      if(items.length > 0){ setItems([...items, newGame]) } else {setItems([newGame])}

      setToast(name)
      setTimeout(() => {
        setToast('')
        form.reset();
      }, 3000)
      
    }
  }

  return (
    <>
        <span className="flex justify-center items-baseline pb-5">
          <h2 className="uppercase font-bold text-3xl inline">Add Game</h2>
          <p className="pl-2 inline font-light">
           What is your next obsession?
          </p>
        </span>
        {(toast !== '') ? <div className="bg-green-500 p-2 text-xs uppercase font-bold mb-3 toastShadow toastAnimate">{toast} was added to your game list</div> : <div className="h-10"></div>}
        <form action="post" className="relative addGameForm" onSubmit={(e) => handleAddGame(e)}>
          <label className="text-xs uppercase">
            Game Name
            <input
              type="text"
              name="game-name"
              className="block w-full border border-gray-400 p-2 text-base formshadow mb-5"
            />
          </label>
          <p className="text-xs uppercase text-center">Platform Type</p>
          <div className="flex justify-center">
            <label className="pfRadio">
              <input
                type="radio"
                id="playstation"
                name="game-platform"
                value="playstation"
              />
              <div className="pfBox BGplaystation flex flex-col items-center p-4 border border-gray-700">
                {<Icons icon="playstation" />}
                <span className="mt-1">Playstation</span>
              </div>
            </label>
            <label className="pfRadio">
              <input type="radio" id="xbox" name="game-platform" value="xbox" />
              <div className="pfBox BGxbox flex flex-col items-center p-4 border border-gray-700">
                {<Icons icon="xbox" />}
                <span className="mt-1">Xbox</span>
              </div>
            </label>
            <label className="pfRadio">
              <input
                type="radio"
                id="nintendo"
                name="game-platform"
                value="nintendo"
              />
              <div className="pfBox BGnintendo flex flex-col items-center p-4 border border-gray-700">
                {<Icons icon="nintendo" />}
                <span className="mt-2">Nintendo</span>
              </div>
            </label>
            <label className="pfRadio">
              <input type="radio" id="pc" name="game-platform" value="pc" />
              <div className="pfBox BGpc flex flex-col items-center p-4 border border-gray-700">
                {<Icons icon="pc" />}
                <span className="mt-4">Gaming PC</span>
              </div>
            </label>
          </div>
          <button
            type="submit"
            className="border-4 border-gray-900 bg-gray-900 text-white font-bold rounded-md px-3 py-1 mt-6 absolute right-1"
          >
            Add Game
          </button>
        </form>
        <div className="flex justify-between mt-6">
      <Link href="/"><button type="button" className="border-4 border-gray-900 font-bold rounded-md px-3 py-1">Back</button></Link>
    </div>
    </>
  );
};

export default AddGame;
