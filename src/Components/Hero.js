import React from "react";
import ReactTypingEffect from "react-typing-effect";
import bg from "../assets/XDZT.gif";
function Hero() {
  return (
    // <div class="flex flex-col justify-center">
    <div class="relative flex flex-col justify-center h-screen items-center">
      <img src={bg} class="h-72 h-1/3 absolute md:mb-24 mb-32 -z-50" />
      <h1 class="md:mb-24 mb-32 px-12 text-white md:text-7xl text-3xl text-center font-heading ">
        Helping you launch your <span class="text-red">web3 protocols.</span>
      </h1>
      <ReactTypingEffect
        speed="80"
        eraseSpeed="0"
        className="absolute bottom-24 text-white md:text-xl text-xs text-center font-mono w-2/3"
        staticText={[
          "We ❤️ to ship and we make sure your protocol is efficient and safe. DeFi, NFTs, general protocols - if it can be done, we can do it.",
        ]}
      />
      {/* <p class="absolute bottom-24 text-white md:text-2xl text-center font-mono w-2/3">
        We ❤️ to ship and we make sure your protocol is efficient and safe.
        DeFi, NFTs, general protocols - if it can be done, we can do it.
      </p> */}
    </div>
    // </div>
  );
}

export default Hero;
