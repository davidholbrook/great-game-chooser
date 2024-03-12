const PlatformColoring = (platform:string) => {
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

  export default PlatformColoring;