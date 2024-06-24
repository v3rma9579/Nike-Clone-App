import f1 from '../assests/featured/f1.png'
import f2 from '../assests/featured/f2.png'
import f3 from '../assests/featured/f3.png'


function Featured() {
      return (
            <>
                  <div className="flex ml-10 mt-20">
                        <p className="font-semibold text-2xl"> Featured </p>
                  </div>


                  <div className='hidden md:block'>
                        <div className='flex p-10 gap-8'>
                              <div className='flex flex-col items-start'>
                                    <img className='h-[550px] md:h-[550px] lg:h-[550px] cursor-pointer' src={f1} alt="" />
                                    <p className='mt-10 text-xl cursor-pointer'>Running Essentials</p>
                                    <p className='mt-3 underline underline-offset-4 hover:text-gray-700 cursor-pointer'>Shop</p>
                              </div>

                              <div className='flex flex-col items-start'>
                                    <img className='h-[550px] md:h-[550px] lg:h-[550px] cursor-pointer' src={f2} alt="" />
                                    <p className='mt-12 text-[15px] cursor-pointer font-semibold'>Featured Footwear</p>
                                    <p className='mt-2 text-xl cursor-pointer'>Nike Dunks</p>
                                    <p className='mt-3 underline underline-offset-4 hover:text-gray-700 cursor-pointer'>Shop</p>
                              </div>

                              <div className='flex flex-col items-start'>
                                    <img className='h-[550px] md:h-[550px] lg:h-[550px] cursor-pointer' src={f3} alt="" />
                                    <p className='mt-10 text-xl cursor-pointer'>Summer Staples</p>
                                    <p className='mt-3 underline underline-offset-4 hover:text-gray-700 cursor-pointer'>Shop</p>
                              </div>
                        </div>
                  </div>


                  <div className='md:hidden'>
                        <div className='media-scroller-phone-featured'>
                              <div className='flex p-10 gap-8'>
                                    <div className='flex flex-col items-start'>
                                          <img className='cursor-pointer' src={f1} alt="" />
                                          <p className='mt-10 text-xl cursor-pointer'>Running Essentails</p>
                                          <p className='mt-3 underline underline-offset-4 hover:text-gray-700 cursor-pointer'>Shop</p>
                                    </div>

                                    <div className='flex flex-col items-start'>
                                          <img className='cursor-pointer' src={f2} alt="" />
                                          <p className='mt-12 text-[15px] cursor-pointer font-semibold'>Featured Footwear</p>
                                          <p className='mt-2 text-xl cursor-pointer'>Nike Dunks</p>
                                          <p className='mt-3 underline underline-offset-4 hover:text-gray-700 cursor-pointer'>Shop</p>
                                    </div>

                                    <div className='flex flex-col items-start'>
                                          <img className='cursor-pointer' src={f3} alt="" />
                                          <p className='mt-10 text-xl cursor-pointer'>Summer Staples</p>
                                          <p className='mt-3 underline underline-offset-4 hover:text-gray-700 cursor-pointer'>Shop</p>
                                    </div>
                              </div>
                        </div>
                  </div>

            </>
      )
}

export default Featured