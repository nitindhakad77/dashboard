import React from 'react'

function Sidebar() {
  return (
    <div className="flex flex-col ml-8 space-y-4">
      <div className='flex flex-row items-center'>
        <p className='mr-6 font-bold'>Artist</p>
        <p>Photography</p>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <div class="rounded-lg shadow-md p-6" style={{ backgroundImage: `url('text1.png')` }}>
            <div class="flex items-center mt-10">
                <img class="h-12 w-12 rounded-lg outline outline-white" src="face1.png"/>
                <div class="ml-2">
                  <div class="text-sm ">
                    <span class="font-semibold text-white">Thomas Edward</span>
                  </div>
                  <div class="text-white text-xs ">
                  @thewildwithyou
                  </div>
                </div>
              </div>
        </div>
        <div class="rounded-lg shadow-md p-4" style={{ backgroundImage: `url('text2.png')` }}>
        <div class="flex items-center mt-10">
                <img class="h-12 w-12 rounded-lg outline outline-white" src="face2.png"/>
                <div class="ml-2">
                  <div class="text-sm ">
                    <span class="font-semibold text-white">Chris Doe</span>
                  </div>
                  <div class="text-white text-xs ">
                  @thewildwithyou
                  </div>
                </div>
              </div>
        </div>
        <div class="rounded-lg shadow-md p-4" style={{ backgroundImage: `url('text3.png')` }}>
        <div class="flex items-center mt-10">
                <img class="h-12 w-12 rounded-lg outline outline-white" src="face3.png"/>
                <div class="ml-2">
                  <div class="text-sm ">
                    <span class="font-semibold text-white">Emilie Jones</span>
                  </div>
                  <div class="text-white text-xs ">
                  @thewildwithyou
                  </div>
                </div>
              </div>
        </div>
        <div class="rounded-lg shadow-md p-4" style={{ backgroundImage: `url('text4.png')` }}>
        <div class="flex items-center mt-10">
                <img class="h-12 w-12 rounded-lg outline outline-white" src="face4.png"/>
                <div class="ml-2">
                  <div class="text-sm ">
                    <span class="font-semibold text-white">Jessica Williams</span>
                  </div>
                  <div class="text-white text-xs ">
                  @thewildwithyou
                  </div>
                </div>
              </div>
        </div>
        <div class="rounded-lg shadow-md p-4" style={{ backgroundImage: `url('text5.png')` }}>
        <div class="flex items-center mt-10">
                <img class="h-12 w-12 rounded-lg outline outline-white" src="face1.png"/>
                <div class="ml-2">
                  <div class="text-sm ">
                    <span class="font-semibold text-white">Thomas Edward</span>
                  </div>
                  <div class="text-white text-xs ">
                  @thewildwithyou
                  </div>
                </div>
              </div>
        </div>

     </div>
     
    </div> 
  )
}

export default Sidebar
