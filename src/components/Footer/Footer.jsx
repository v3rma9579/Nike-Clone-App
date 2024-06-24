import countryIcon from '../assests/globe.png'


function Footer() {
      return (
            <>
                  <div className="mt-28">
                        <hr className="h-px ml-10 mr-10 bg-gray-200 border-0 dark:bg-gray-400" />
                  </div>

                  <div className="flex flex-row justify-between ml-20 mt-14 gap-40">
                        <div className="footerMenu">
                              <p className="mb-7 font-semibold text-left">Resources</p>
                              <button className="text-left text-gray-600 font-semibold">Find A Store</button>
                              <button className="text-left text-gray-600 font-semibold">Become a Member</button>
                              <button className="text-left text-gray-600 font-semibold">Send Us Feedback</button>


                        </div>

                        <div className="footerMenu">
                              <p className="mb-7 font-semibold text-left">Help</p>
                              <button className="text-left text-gray-600 font-semibold">Get Help</button>
                              <button className="text-left text-gray-600 font-semibold">Order Status</button>
                              <button className="text-left text-gray-600 font-semibold">Delivery</button>
                              <button className="text-left text-gray-600 font-semibold">Returns</button>
                              <button className="text-left text-gray-600 font-semibold">Payment Options</button>
                              <button className="text-left text-gray-600 font-semibold">Contact Us On Nike.com Inquiries</button>
                              <button className="text-left text-gray-600 font-semibold">Contact Us on All Other Inquiries</button>

                        </div>

                        <div className="footerMenu">
                              <p className="mb-7 font-semibold text-left">Company</p>
                              <button className="text-left text-gray-600 font-semibold">About Nike</button>
                              <button className="text-left text-gray-600 font-semibold">News</button>
                              <button className="text-left text-gray-600 font-semibold">Careers</button>
                              <button className="text-left text-gray-600 font-semibold">Investors</button>
                              <button className="text-left text-gray-600 font-semibold">Sustainability</button>

                        </div>


                        <div className="mr-20">
                              <div className='flex gap-2'>
                                    <img className="w-6 h-6 cursor-pointer" src={countryIcon} alt="" />
                                    <button className='hover:text-gray-700'>India</button>
                              </div>

                        </div>

                  </div>


                  <div className='flex flex-row gap-10 ml-10 mt-20 mb-40 text-gray-600'>
                        <p>© 2024 Nike, Inc. All rights reserved</p>
                        <div>

                              <div className="dropdown inline-block relative">
                                    <button onclick="toggleDropdown()" className="text-gray-700 font-medium inline-flex items-center">
                                          <span className="mr-1">Guides</span>
                                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                    </button>
                                    <ul id="dropdown-menu" className="dropdown-menu absolute hidden text-gray-700 pt-1"
                                          style={{ bottom: '100%', transform: 'translateY(-1px)' }}>
                                          <li className="w-40"><a className="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Nike Adapt</a></li>
                                          <li className=""><a className="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Nike Air</a></li>
                                          <li className=""><a className="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Nike Air Force 1</a></li>
                                          <li className=""><a className="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Nike Air Max</a></li>
                                          <li className=""><a className="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Nike FlyEase</a></li>
                                          <li className=""><a className="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Nike Free</a></li>
                                          <li className=""><a className="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Nike Joyride</a></li>
                                          <li className=""><a className="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Nike Pegasus</a></li>
                                          <li className=""><a className="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Nike React</a></li>
                                          <li className=""><a className="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Nike Vaporfly</a></li>
                                          <li className=""><a className="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Nike Zoom Fly</a></li>
                                          <li className=""><a className="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Nike ZoomX</a></li>
                                    </ul>
                              </div>


                        </div>
                        <button className='font-medium hover:text-black'>Terms of Sale</button>
                        <button className='font-medium hover:text-black'>Terms of Use</button>
                        <button className='font-medium hover:text-black'>Nike Privacy Policy</button>
                  </div>



            </>
      )
}

export default Footer