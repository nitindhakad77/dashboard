import React from 'react'

function Header() {
  return (
    
      <div class="z-10 flex fixed top-0 w-full mt-0 bg-white shadow-md">
          <div class="w-1/4 flex round-lg bg-white items-start justify-start px-6">
            <h1 className='text-black font-bold text-4xl'> LOGO </h1>
          </div>
    
          {/* <div class="w-1/2 mt-0 flex items-center justify-center rounded-xl bg-white">
            <input type="text" placeholder="Search..." class="border rounded-lg border-gray-300 rounded-l mb-2 px-4 h-full w-full focus:outline-none focus:border-indigo-500"/>
            <button class="bg-indigo-500 text-white mb-2 px-4 py-2 rounded-r flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/>
            </svg>
            Filter
            </button>
          </div> */}
          <form class="flex w-1/2 items-center mx-auto">   
            <label for="voice-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <img src="search.png" alt="Home" className='mr-3'/>
              </div>
              <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search here..." required />
              <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
              <img src="filter.png" alt="Home" className='mr-3'/>
              <p> Filters </p>
              </button>
            </div>
          </form>

    
          <div class="w-1/4 flex items-center justify-start px-1">
            <button class="bg-green-500 text-white w-full px-6 py-2 rounded">Become a Seller</button>
          </div>
        </div>
  )
}

export default Header
