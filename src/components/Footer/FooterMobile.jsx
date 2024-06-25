import React, { useState } from 'react';
import dropdownButton from '../assests/down-arrow.png'
import countryIcon from '../assests/globe.png'
import upArrow from '../assests/up.png'
import downArrow from '../assests/down.png'

function FooterMobile() {

      const [open1, setOpen1] = useState(false);
      const [changeIcon1, setChangeIcon1] = useState(downArrow);

      const [open2, setOpen2] = useState(false);
      const [changeIcon2, setChangeIcon2] = useState(downArrow);

      const [open3, setOpen3] = useState(false);
      const [changeIcon3, setChangeIcon3] = useState(downArrow);

      const handleOpen1 = () => {
            setOpen1(!open1);

            if (open1) {
                  setChangeIcon1(downArrow);
            }
            else {
                  setChangeIcon1(upArrow);
            }
      }

      const handleOpen2 = () => {
            setOpen2(!open2);

            if (open2) {
                  setChangeIcon2(downArrow);
            }
            else {
                  setChangeIcon2(upArrow);
            }
      }

      const handleOpen3 = () => {
            setOpen3(!open3);

            if (open3) {
                  setChangeIcon3(downArrow);
            }
            else {
                  setChangeIcon3(upArrow);
            }
      }

      return (
            <div className="md:hidden">
                  <div className="mt-28">
                        <hr className="h-px ml-10 mr-10 bg-gray-200 border-0 dark:bg-gray-400" />
                  </div>


                  <div className="mt-10 ml-10 flex flex-col items-start mb-10">
                        <div className="flex items-center justify-between w-full">
                              <div>
                                    <button onClick={handleOpen1} className="font-semibold">
                                          Resources
                                    </button>
                              </div>
                              <div className='mr-12'>
                                    <button onClick={handleOpen1}><img className="w-4 cursor-pointer" src={changeIcon1} alt="Dropdown button" /></button>
                              </div>
                        </div>

                        {open1 ? <div className='mt-5 flex flex-col items-start gap-3'>
                              <a className='text-gray-500 font-semibold' href="#">Find A Store</a>
                              <a className='text-gray-500 font-semibold' href="#">Become A Member</a>
                              <a className='text-gray-500 font-semibold' href="#">Send Us Feedback A Store</a>
                        </div> :
                              <div></div>}
                  </div>
                  <hr className="h-px ml-10 mr-10 bg-gray-200 border-0 dark:bg-gray-400" />
                  <div className="mt-10 ml-10 flex flex-col items-start mb-10">
                        <div className="flex items-center justify-between w-full">
                              <div>
                                    <button onClick={handleOpen2} className="font-semibold">
                                          Help
                                    </button>
                              </div>
                              <div className='mr-12'>
                                    <button onClick={handleOpen2}><img className="w-4 cursor-pointer" src={changeIcon2} alt="Dropdown button" /></button>
                              </div>
                        </div>

                        {open2 ? <div className='mt-5 flex flex-col items-start gap-3'>
                              <a className='text-gray-500 font-semibold' href="#">Get Help</a>
                              <a className='text-gray-500 font-semibold' href="#">Order Status</a>
                              <a className='text-gray-500 font-semibold' href="#">Delivery</a>
                              <a className='text-gray-500 font-semibold' href="#">Returns</a>
                              <a className='text-gray-500 font-semibold' href="#">Payment Options</a>
                              <a className='text-gray-500 font-semibold' href="#">Contact Us on Nike.com Inquiries</a>
                              <a className='text-gray-500 font-semibold' href="#">Contact Us on All Other Inquiries</a>
                        </div> :
                              <div></div>}
                  </div>
                  <hr className="h-px ml-10 mr-10 bg-gray-200 border-0 dark:bg-gray-400" />
                  <div className="mt-10 ml-10 flex flex-col items-start mb-10">
                        <div className="flex items-center justify-between w-full">
                              <div>
                                    <button onClick={handleOpen3} className="font-semibold">
                                          Company
                                    </button>
                              </div>
                              <div className='mr-12'>
                                    <button onClick={handleOpen3}><img className="w-4 cursor-pointer" src={changeIcon3} alt="Dropdown button" /></button>
                              </div>
                        </div>

                        {open3 ? <div className='mt-5 flex flex-col items-start gap-3'>
                              <a className='text-gray-500 font-semibold' href="#">About Nike</a>
                              <a className='text-gray-500 font-semibold' href="#">News</a>
                              <a className='text-gray-500 font-semibold' href="#">Carrers</a>
                              <a className='text-gray-500 font-semibold' href="#">Investors</a>
                              <a className='text-gray-500 font-semibold' href="#">Sustainability</a>
                        </div> :
                              <div></div>}
                  </div>
                  <hr className="h-px ml-10 mr-10 bg-gray-200 border-0 dark:bg-gray-400" />
                  <div className="mt-10 ml-10 flex flex-col items-start mb-10">
                        <div className="flex items-center justify-between w-full">
                              <div className='flex gap-2 items-center'>
                                    <img className='w-5 h-5' src={countryIcon} alt="" />
                                    <button className="font-semibold hover:text-gray-600">
                                          India
                                    </button>
                              </div>

                        </div>
                  </div>

                  <div className='mt-10 flex flex-col items-start ml-10 mb-10 gap-2 text-[15px]'>
                        <p className='text-gray-500 font-semibold'>© 2024 Nike, Inc. All rights reserved</p>
                        <a className='text-gray-500 font-semibold' href="#">Guides</a>
                        <a className='text-gray-500 font-semibold' href="#">Terms of Sale</a>
                        <a className='text-gray-500 font-semibold' href="#">Terms of Use</a>
                        <a className='text-gray-500 font-semibold' href="#">Nike Privacy Policy</a>
                  </div>
            </div>
      )
}

export default FooterMobile