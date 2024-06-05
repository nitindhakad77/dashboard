import React from 'react'

function Card() {
  return (
    <div className='gap-3'>
            <div class="bg-white w-full border shadow-sm px-8 py-7 rounded-2xl">
              <div class="flex items-center">
                <img class="h-12 w-12" src="p1.png"/>
                
                <div class="ml-2">
                  <div class="text-sm ">
                    <span class="font-semibold">Lara Leones</span>
                  </div>
                  <div class="text-gray-500 text-xs ">
                    @thewallart
                  </div>
                </div>
              </div>
              <p class="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Read More</p>
              <img src='profile1.png' alt='image' className='mt-4 mb-3 w-full'/>
              <div class="text-gray-500 text-xs flex items-center mt-6">
                <img class="mr-2 ml-1" src="like.png"/>
                <p className='font-bold'> 9.8k </p>
                <img class="mr-2 ml-1" src="comment.png"/>
                <p className='font-bold'> 8.6k k</p>
                <img class="mr-2 ml-1" src="share.png"/>
                <p className='font-bold'> 7.2k</p>
              </div>
            </div>
            <div class="bg-white border shadow-sm px-8 py-7 rounded-lg ">
              <div class="flex items-center">
                <img class="h-12 w-12" src="p2.png"/>
                <div class="ml-2">
                  <div class="text-sm ">
                    <span class="font-semibold">Thomas J.</span>
                  </div>
                  <div class="text-gray-500 text-xs ">
                    @thecustomcreater
                  </div>
                </div>
              </div>
              <p class="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Read More</p>
              <img src='profile2.png' alt='image' className='mt-4 mb-3 w-full'/>
              <div class="text-gray-500 text-xs flex items-center mt-6">
                <img class="mr-2 ml-1" src="like.png"/>
                <p className='font-bold'> 9.8k </p>
                <img class="mr-2 ml-1" src="comment.png"/>
                <p className='font-bold'> 8.6k k</p>
                <img class="mr-2 ml-1" src="share.png"/>
                <p className='font-bold'> 7.2k</p>
              </div>
            </div>      
    </div>
  )
}

export default Card
