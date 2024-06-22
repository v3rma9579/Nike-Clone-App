import trendingPic from '../assests/trending.png'

function Trending() {
      return (
            <>
                  <div className='hidden md:block'>
                        <div className="flex justify-start mt-20 ml-10 font-semibold">
                              <p className="text-2xl">Trending</p>
                        </div>

                        <div className='p-10 pt-4 mt-5'>
                              <img className='cursor-pointer' src={trendingPic} alt="" />
                        </div>

                        <div className='flex justify-center flex-col'>
                              <p className="mt-2 text-6xl font-extrabold mb-2">SKY, NO LIMITS</p>
                              <p className="font-medium text-gray-700">Grind, slide, carve, flip - tackle every trick fearlessly and set no limits. Inspired by her heritage and the confidence skateboarding inspires in</p>
                              <p className='font-medium text-gray-700'>the young Olympian, Sky Brown's new Pogo SB invites you to ride with courage.</p>
                        </div>

                        <div className='flex justify-center mt-6'>
                              <button className="w-16  h-8 items-center font-bold text-[0.9rem] bg-black text-white rounded-2xl hover:bg-gray-600">Shop</button>
                        </div>
                  </div>

                  <div className='md:hidden'>
                        <div className='flex justify-start mt-20 ml-8 font-semibold'>
                              <p className='text-2xl'>Trending</p>
                        </div>

                        <div>
                              <img className='p-8 cursor-pointer' src={trendingPic} alt="" />
                        </div>

                        <div className='flex flex-col items-start ml-8'>
                              <div className='flex flex-col place-items-start justify-start'>
                              <p className="mt-2 text-3xl font-extrabold mb-2">SKY, NO LIMITS</p>
                              <p className="font-medium text-gray-700 text-left">Grind, slide, carve, flip - tackle every trick fearlessly and </p>
                              <p className='font-medium text-gray-700 text-left'>set no limits. Inspired by her heritage and the confidence skateboarding inspires in the young </p>
                              <p className='font-medium text-gray-700 text-left'>Olympian, Sky Brown's new Pogo SB invites you to ride with courage.</p>
                              </div>
                        </div>

                        <div className="mt-5 flex flex-row justify-start gap-5 ml-8">
                                    <button className="w-16  h-8 items-center font-bold text-[0.9rem] bg-black text-white rounded-2xl hover:bg-gray-600">Shop</button>
                        </div>
                  </div>
            </>
      )
}

export default Trending