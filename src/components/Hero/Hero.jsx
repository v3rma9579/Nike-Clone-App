import React from "react";
import poster from '../assests/Screenshot 2024-06-08 163313.png'
import posterMobile from '../assests/Screenshot 2024-06-08 192905.png'

function HeroSection() {
      return (
            <>
                  <div>
                        <div className="hidden md:block">
                              <div className="bg-gray-200 h-20 flex justify-center flex-col">
                                    <p>New Styles on Sale: Up to 40 % Off</p>
                                    <a className="text-[0.9rem] underline font-semibold" href="">Shop All Our New Markdowns</a>
                              </div>
                              <div className="mt-0">
                                    <img className="px-8 cursor-pointer" src={poster} alt="" />
                              </div>
                        </div>

                        <div className="md:hidden">
                              <div className="bg-gray-200 h-20 flex justify-center flex-col">
                                    <p>New Styles on Sale: Up to 40 % Off</p>
                                    <a className="text-[0.9rem] underline font-semibold" href="">Shop All Our New Markdowns</a>
                              </div>
                              <div className="mt-0">
                                    <img className="px-8 cursor-pointer" src={posterMobile} alt="" />
                              </div>
                        </div>
                  </div>

                  <div>
                        <div className="hidden md:block mt-8">
                              <p className="font-medium text-gray-700 mb-2">Nike Pegasus 41</p>
                              <p className="text-6xl font-extrabold mb-2">DON'T WASTE YOUR ENERGY</p>
                              <p className="font-medium text-gray-700">Run in Pegasus. Feel the responsive energy return of Air Zoom and all-new ReactX foam.</p>
                              <div className="mt-5 flex flex-row justify-center gap-5">
                                    <button className="w-16  h-8 items-center font-bold text-[0.9rem] bg-black text-white rounded-2xl hover:bg-gray-600">Shop</button>
                                    <button className="w-24 h-8 items-center font-bold text-[0.9rem] bg-black text-white rounded-2xl hover:bg-gray-600">Shop All</button>
                              </div>
                        </div>

                        <div className="md:hidden flex flex-col items-start mt-6">
                              <p className="font-medium text-gray-700 mb-2 ml-8">Nike Pegasus 41</p>
                              <p className="text-3xl font-extrabold ml-8">DON'T WASTE YOUR</p>
                              <p className="text-3xl font-extrabold ml-8">ENERGY</p>
                              <p className="font-medium text-gray-700 ml-8">Run in Pegasus. Feel the responsive energy return of Air</p>
                              <p className="font-medium text-gray-700 ml-8">Zoom and all-new ReactX foam.</p>
                              <div className="mt-5 flex flex-row justify-center gap-5 ml-8">
                                    <button className="w-16  h-8 items-center font-bold text-[0.9rem] bg-black text-white rounded-2xl hover:bg-gray-600">Shop</button>
                                    <button className="w-24 h-8 items-center font-bold text-[0.9rem] bg-black text-white rounded-2xl hover:bg-gray-600">Shop All</button>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default HeroSection