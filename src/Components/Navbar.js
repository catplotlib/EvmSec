import React from "react";
import cal from "../assets/cal.png";

function Navbar() {
  return (
    <nav class="sticky top-0 z-50 bg-dblack border-gray-200 px-1 sm:px-4 py-4 rounded border-b border-grayy">
      <div class="container flex  justify-between items-center mx-auto ">
        <a href="/" class="flex items-center">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            EVM Security
          </span>
        </a>

        {/* <button
          data-collapse-toggle="mobile-menu"
          type="button"
          class="inline-flex items-center p-2  text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
          data-toggle="collapse"
          
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button> */}
        <div class=" w-full md:block w-auto collapse in" id="mobile-menu">
          <ul class="flex mt-4 flex-row space-x-8 mt-0 text-sm font-medium">
            <li>
              <button class="md:text-xl text-sm bg-bluee hover:bg-blue-700 text-white font-bold md:py-2 md:px-4 px-1 py-1 rounded">
                <a
                  href="https://calendly.com/abhinavmir/coffee"
                  target="_blank"
                  // class="md:text-xl block py-2 pr-1 text-white rounded md:bg-transparent text-white md:p-0"
                  aria-current="page"
                >
                  Schedule a call instantly
                </a>
              </button>
            </li>
            {/* <li>
              <a
                href="/"
                class="md:text-2xl block py-2 hover:text-white rounded md:bg-transparent md:text-blue-700 dark:text-grayy"
                aria-current="page"
              >
                Home
              </a>
            </li> */}
            <li class="hidden md:block">
              <a
                href="#Services"
                class=" md:text-xl block py-2 hover:text-white rounded md:bg-transparent md:text-blue-700  dark:text-grayy"
                aria-current="page"
              >
                Services
              </a>
            </li>
            <li class="hidden md:block">
              <a
                href="#Clients"
                class=" md:text-xl block py-2 hover:text-white rounded md:bg-transparent md:text-blue-700  dark:text-grayy"
                aria-current="page"
              >
                Clients
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
