"use client"

import react, {useState, useEffect} from 'react';

export default function Home() {
// Game Library Page
return(
  <div className="container mx-auto flex justify-center items-center min-h-screen">
    <div className="w-10/12 bg-white p-5 dshadows">
      <span className="flex justify-center items-baseline">
      <h2 className="uppercase font-bold text-3xl inline">Your Library</h2><p className="inline font-light">What are you currently playing?</p>
      </span>
    </div>
  </div>
  )
}
