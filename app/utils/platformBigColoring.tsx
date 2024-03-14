const PlatformBigColoring = (platform:string) => {
  switch(platform){
    case('Xbox'):
        return <div className="absolute right-[-5%] md:right-[-20%] xl:right-[-10%] bottom-[-40%] bg-[#107C10] w-80 h-14 flex justify-center items-center text-white rounded-full text-4xl font-bold">Xbox</div>
    case('Playstation'):
        return <div className="absolute right-[-5%] md:right-[-20%] xl:right-[-10%] bottom-[-40%] bg-[#2E6DB4] w-80 h-14 flex justify-center items-center text-white rounded-full text-4xl font-bold">Playstation</div>
    case('Nintendo'):
        return <div className="absolute right-[-5%] md:right-[-20%] xl:right-[-10%] bottom-[-40%] bg-[#E60012] w-80 h-14 flex justify-center items-center text-white rounded-full text-4xl font-bold">Nintendo</div>
    case('PC'):
        return <div className="absolute right-[-5%] md:right-[-20%] xl:right-[-10%] bottom-[-40%] bg-[#333333] w-80 h-14 flex justify-center items-center text-white rounded-full text-4xl font-bold">PC</div>
    default:
        return 'Hello Ther';
  }
}

export default PlatformBigColoring;