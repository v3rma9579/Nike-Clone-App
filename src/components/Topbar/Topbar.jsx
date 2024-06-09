import React from "react";
import logo from '../assests/logo_nike.png'
import nikeLogo from '../assests/nike_logo2.jpg'
import heart from '../assests/heart.png'
import bag from '../assests/shopping-bag.png'
import search from '../assests/search.png'
import user from '../assests/people.png'
import hamBurger from '../assests/hamburger.png'

function Topbar() {
      return (
            <>
                  <div className="hidden md:block">
                        <nav className="bg-gray-200 h-8 flex items-center justify-between">
                              <div className="ml-10">
                                    <img className="w-5 cursor-pointer" src={logo} alt="" />
                              </div>

                              <div className="flex gap-6 mr-14 font-semibold">
                                    <a className="text-[14px] hover:text-gray-500 " href="">Find a store</a>
                                    <a className="text-[14px] hover:text-gray-500" href="">Help</a>
                                    <a className="text-[14px] hover:text-gray-500" href="">Join Us</a>
                                    <a className="text-[14px] hover:text-gray-500" href="">Sign In</a>
                              </div>
                        </nav>

                        <nav className="flex justify-between items-center h-20">
                              <div className="flex ml-9">
                                    <img className="w-16 cursor-pointer" src={nikeLogo} alt="" />
                              </div>

                              <div className="flex gap-10 font-semibold">
                                    <a className="underline-animation" href="">New & Featured</a>
                                    <a className="underline-animation" href="">Men</a>
                                    <a className="underline-animation" href="">Women</a>
                                    <a className="underline-animation" href="">Kids</a>
                                    <a className="underline-animation" href="">Sale</a>
                                    <a className="underline-animation" href="">Customize</a>
                                    <a className="underline-animation" href="">SNKRS</a>
                              </div>

                              <div className="flex gap-2 items-center">
                                    <input className="w-36 rounded-2xl text-center border-none" type="text" placeholder="Search" />
                                    <div className="w-10 h-10 hover:bg-slate-400 rounded-full flex items-center justify-center">
                                          <img className="w-6 h-6 cursor-pointer" src={heart} alt="" />
                                    </div>
                                    <div className="w-10 h-10 hover:bg-slate-400 rounded-full flex items-center justify-center mr-10">
                                          <img className="w-6 h-6 cursor-pointer" src={bag} alt="" />
                                    </div>


                              </div>
                        </nav>
                  </div>

                  <div className="md:hidden">
                        <nav className="flex justify-between items-center">
                              <div className="ml-2">
                                    <img className="w-20 cursor-pointer" src={nikeLogo} alt="" />
                              </div>

                              <div className="flex gap-4">
                                    <div className="w-10 h-10 hover:bg-slate-400 rounded-full flex items-center justify-center">
                                          <img className="w-6 h-6 cursor-pointer" src={search} alt="" />
                                    </div>
                                    <div className="w-10 h-10 hover:bg-slate-400 rounded-full flex items-center justify-center">
                                          <img className="w-6 h-6 cursor-pointer" src={user} alt="" />
                                    </div>
                                    <div className="w-10 h-10 hover:bg-slate-400 rounded-full flex items-center justify-center">
                                          <img className="w-6 h-6 cursor-pointer" src={bag} alt="" />
                                    </div>
                                    <div className="w-10 h-10 mr-10 hover:bg-slate-400 rounded-full flex items-center justify-center">
                                          <img className="w-6 h-6 cursor-pointer" src={hamBurger} alt="" />
                                    </div>
                              </div>
                        </nav>
                  </div>
            </>
      )
}

export default Topbar