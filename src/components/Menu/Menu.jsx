import React, { useState } from 'react';



function Menu() {

      const DropdownText = () => {
            const [isOpen, setIsOpen] = useState(false);

            const toggleDropdown = () => {
                  setIsOpen(!isOpen);
            };
      }

      return (
            <>

                  <div className="hidden md:block">
                        <div className="flex items-center justify-center mt-40 gap-52">
                              <div className="flex flex-col gap-4 text-left">
                                    <p className="font-semibold text-[20px] cursor-pointer">Icons</p>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Air Force 1</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Hurrache</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Air Max 90</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Air Max 95</a>
                              </div>

                              <div className="flex flex-col gap-4 text-left">
                                    <p className="font-semibold text-[20px] cursor-pointer">Shoes</p>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">All Shoes</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Custom Shoes</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Jordan Shoes</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Running Shoes</a>
                              </div>

                              <div className="flex flex-col gap-4 text-left">
                                    <p className="font-semibold text-[20px] cursor-pointer">Clothing</p>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">All Clothing</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Modest Wear</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Hoodies & Pullovers </a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Shirts & Tops</a>
                              </div>

                              <div className="flex flex-col gap-4 text-left">
                                    <p className="font-semibold text-[20px] cursor-pointer">Kids'</p>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Infant & Toddler Shoes</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Kids' Shoes</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Kids' Jordan Shoes</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Kids' Basketball Shoes</a>
                              </div>


                        </div>
                  </div>


                 

            </>
      )

}

export default Menu