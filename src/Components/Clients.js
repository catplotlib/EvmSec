import React from "react";
import defi from "../assets/defi.png";
import phuture from "../assets/phuture.png";
//import regen from "../assets/regen.jpeg";
//import regen from "../assets/regen.svg";
function Clients() {
  return (
    <div
      id="Clients"
      class="mt-12 flex flex-col w-full h-screen items-center "
    >
      <h1 class="md:mt-48  px-12 text-white md:text-8xl text-5xl md:mb-48 mb-24 text-center font-heading underline decoration-6 underline-offset-6 decoration-dbluee">
        Clients
      </h1>
      <div
        class="flex 
       flex-col md:flex-row justify-between md:w-full md:px-24 w-1/2 "
      >
        <img src={defi} class="md:h-20 h-16 mb-12"></img>
        <img src={phuture} class="md:h-20 mb-12"></img>
        <img
          src="https://bucket.mlcdn.com/a/1227/1227754/images/bdb6200ca1dca2a623be747552c052068c414639.png"
          class="md:h-24 mb-12"
        ></img>
        <img
          src="https://0xhabitat.org/img/v2-logo-full_dark.svg"
          class="md:h-16 mb-12"
        ></img>
      </div>
    </div>
  );
}

export default Clients;
