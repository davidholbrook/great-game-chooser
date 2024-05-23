import React from "react";
import Image from "next/image";
import Icons from "../utils/icons";

export const AddGame = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center min-h-screen">
      <Image
        src="/img/logo.svg"
        alt="Great Game Chooser logo"
        width={460}
        height={50}
        className="mb-5"
      />
      <div className="w-10/12 bg-[#CCCCCC] py-5 px-20 dshadows">
        <span className="flex justify-center items-baseline pb-5">
          <h2 className="uppercase font-bold text-3xl inline">Add Game</h2>
          <p className="pl-2 inline font-light">
           What is your next obsession?
          </p>
        </span>
        <form action="post" className="relative">
          <label className="text-xs uppercase">
            Game Name
            <input
              type="text"
              name="gameName"
              className="block w-full border border-gray-400 p-2 text-base formshadow mb-5"
            />
          </label>
          <p className="text-xs uppercase text-center">Platform Type</p>
          <div className="flex justify-center">
            <label className="pfRadio">
              <input
                type="radio"
                id="playstation"
                name="platform"
                value="Playstation"
              />
              <div className="pfBox BGplaystation flex flex-col items-center p-4 border border-gray-700">
                {<Icons icon="playstation" />}
                <span className="mt-1">Playstation</span>
              </div>
            </label>
            <label className="pfRadio">
              <input type="radio" id="xbox" name="platform" value="Xbox" />
              <div className="pfBox BGxbox flex flex-col items-center p-4 border border-gray-700">
                {<Icons icon="xbox" />}
                <span className="mt-1">Xbox</span>
              </div>
            </label>
            <label className="pfRadio">
              <input
                type="radio"
                id="nintendo"
                name="platform"
                value="Nintendo"
              />
              <div className="pfBox BGnintendo flex flex-col items-center p-4 border border-gray-700">
                {<Icons icon="nintendo" />}
                <span className="mt-2">Nintendo</span>
              </div>
            </label>
            <label className="pfRadio">
              <input type="radio" id="pc" name="platform" value="PC" />
              <div className="pfBox BGpc flex flex-col items-center p-4 border border-gray-700">
                {<Icons icon="pc" />}
                <span className="mt-4">Gaming PC</span>
              </div>
            </label>
          </div>
          <button
            type="button"
            className="border-4 border-gray-900 bg-gray-900 text-white font-bold rounded-md px-3 py-1 mt-6 absolute right-1"
          >
            Add Game
          </button>
        </form>
        <div className="flex justify-between mt-6">
      <button type="button" className="border-4 border-gray-900 font-bold rounded-md px-3 py-1">Add New Game</button>
    </div>
      </div>
    </div>
  );
};

export default AddGame;
