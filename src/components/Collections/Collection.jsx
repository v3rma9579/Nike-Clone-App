import s1 from '../assests/shoes/1.png'
import s2 from '../assests/shoes/2.png'
import s3 from '../assests/shoes/3.png'
import s4 from '../assests/shoes/4.png'
import s5 from '../assests/shoes/5.png'
import s6 from '../assests/shoes/6.png'
import s7 from '../assests/shoes/7.png'
import s8 from '../assests/shoes/8.png'



function Collection() {
      return (
            <>
            <div className='hidden md:block'>
                  <div className="flex ml-8 mt-20 mb-5">
                        <p className="font-semibold text-2xl">New in This Week</p>
                  </div>

                  <div className="media-scroller">
                        <div className='flex flex-col items-start mb-20'>
                              <img className='cursor-pointer' src={s1} alt="" />
                              <p className='font-semibold'>Nike Pegasus 41</p>
                              <p className='text-gray-700'>Men's Road Running Shoes</p>
                              <p className='font-semibold'>MRP: ₹ 11 895.00</p>
                        </div>

                        <div className='flex flex-col items-start'>
                              <img className='cursor-pointer' src={s2} alt="" />
                              <p className='font-semibold'>Nike Pegasus 41</p>
                              <p className='text-gray-700'>Women's Road Running Shoes</p>
                              <p className='font-semibold'>MRP: ₹ 11 895.00</p>
                        </div>

                        <div className='flex flex-col items-start'>
                              <img className='cursor-pointer' src={s4} alt="" />
                              <p className='font-semibold'>Nike ACG Mountain Fly 2 Low</p>
                              <p className='text-gray-700'>Men's Road Running Shoes</p>
                              <p className='font-semibold'>MRP: ₹ 13 995.00</p>
                        </div>

                        <div className='flex flex-col items-start'>
                              <img className='cursor-pointer' src={s3} alt="" />
                              <p className='font-semibold'>Air Jordan XXXVII Low PF</p>
                              <p className='text-gray-700'>Basketball Shoes</p>
                              <p className='font-semibold'>MRP: ₹ 17 295.00</p>
                        </div>

                        <div className='flex flex-col items-start'>
                              <img className='cursor-pointer' src={s5} alt="" />
                              <p className='font-semibold'>Air Jordan XXXVII Low PF</p>
                              <p className='text-gray-700'>Basketball Shoes</p>
                              <p className='font-semibold'>MRP: ₹ 17 295.00</p>
                        </div>

                        <div className='flex flex-col items-start'>
                              <img className='cursor-pointer' src={s6} alt="" />
                              <p className='font-semibold'>Nike Pegasus 41</p>
                              <p className='text-gray-700'>Men's Road Running Shoes</p>
                              <p className='font-semibold'>MRP: ₹ 11 895.00</p>
                        </div>

                        <div className='flex flex-col items-start'>
                              <img className='cursor-pointer' src={s7} alt="" />
                              <p className='font-semibold'>Air Jordan I High G</p>
                              <p className='text-gray-700'>Men's Golf Shoes</p>
                              <p className='font-semibold'>MRP: ₹ 16 995.00</p>
                        </div>

                        <div className='flex flex-col items-start'>
                              <img className='cursor-pointer' src={s8} alt="" />
                              <p className='font-semibold'>Nike Court Royale 2 Low</p>
                              <p className='text-gray-700'>Men's Shoe</p>
                              <p className='font-semibold'>MRP: ₹ 3995.00</p>
                        </div>


                  </div>


            </div>



                  <div className='md:hidden'>
                        <div className="flex ml-8 mt-20">
                              <p className="font-semibold text-2xl">New in This Week</p>
                        </div>

                        <div className="media-scroller-phone">
                              <div className='flex flex-col items-start'>
                                    <img className='cursor-pointer' src={s1} alt="" />
                                    <p className='font-semibold'>Nike Pegasus 41</p>
                                    <p className='text-gray-700'>Men's Road Running Shoes</p>
                                    <p className='font-semibold'>MRP: ₹ 11 895.00</p>
                              </div>

                              <div className='flex flex-col items-start'>
                                    <img className='cursor-pointer' src={s2} alt="" />
                                    <p className='font-semibold'>Nike Pegasus 41</p>
                                    <p className='text-gray-700'>Women's Road Running Shoes</p>
                                    <p className='font-semibold'>MRP: ₹ 11 895.00</p>
                              </div>

                              <div className='flex flex-col items-start'>
                                    <img className='cursor-pointer' src={s4} alt="" />
                                    <p className='font-semibold'>Nike ACG Mountain Fly 2 Low</p>
                                    <p className='text-gray-700'>Men's Road Running Shoes</p>
                                    <p className='font-semibold'>MRP: ₹ 13 995.00</p>
                              </div>

                              <div className='flex flex-col items-start'>
                                    <img className='cursor-pointer' src={s3} alt="" />
                                    <p className='font-semibold'>Air Jordan XXXVII Low PF</p>
                                    <p className='text-gray-700'>Basketball Shoes</p>
                                    <p className='font-semibold'>MRP: ₹ 17 295.00</p>
                              </div>

                              <div className='flex flex-col items-start'>
                                    <img className='cursor-pointer' src={s5} alt="" />
                                    <p className='font-semibold'>Air Jordan XXXVII Low PF</p>
                                    <p className='text-gray-700'>Basketball Shoes</p>
                                    <p className='font-semibold'>MRP: ₹ 17 295.00</p>
                              </div>

                              <div className='flex flex-col items-start'>
                                    <img className='cursor-pointer' src={s6} alt="" />
                                    <p className='font-semibold'>Nike Pegasus 41</p>
                                    <p className='text-gray-700'>Men's Road Running Shoes</p>
                                    <p className='font-semibold'>MRP: ₹ 11 895.00</p>
                              </div>

                              <div className='flex flex-col items-start'>
                                    <img className='cursor-pointer' src={s7} alt="" />
                                    <p className='font-semibold'>Air Jordan I High G</p>
                                    <p className='text-gray-700'>Men's Golf Shoes</p>
                                    <p className='font-semibold'>MRP: ₹ 16 995.00</p>
                              </div>

                              <div className='flex flex-col items-start'>
                                    <img className='cursor-pointer' src={s8} alt="" />
                                    <p className='font-semibold'>Nike Court Royale 2 Low</p>
                                    <p className='text-gray-700'>Men's Shoe</p>
                                    <p className='font-semibold'>MRP: ₹ 3995.00</p>
                              </div>


                        </div>


                  </div>

                  </>
      )
}


export default Collection