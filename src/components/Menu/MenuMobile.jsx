import * as React from 'react';

const MobileDropdown = () => {
      const [open1, setOpen1] = React.useState(false);

      const handleOpen1 = () => {
            setOpen1(!open1);
      };

      const [open2, setOpen2] = React.useState(false);

      const handleOpen2 = () => {
            setOpen2(!open2);
      };

      const [open3, setOpen3] = React.useState(false);

      const handleOpen3 = () => {
            setOpen3(!open3);
      };

      const [open4, setOpen4] = React.useState(false);

      const handleOpen4 = () => {
            setOpen4(!open4);
      };

      


      return (
            <div className='md:hidden'>
                  <div className='flex flex-col mt-40 items-start ml-10 gap-3'>
                        <button className='text-xl font-medium' onClick={handleOpen1}>Icons</button>
                        {open1 ?
                              <div className='flex flex-col ml-4 text-left gap-3'>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Air Force 1</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Hurrache</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Air Max 90</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Air Max 95</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Air Max 97</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Air Max 270</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Air Max 720</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">All Air Max</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500 mb-2" href="/#">Vapormax</a>
                              </div>
                              : <div></div>}

                        <button className='text-xl font-medium' onClick={handleOpen2}>Shoes</button>
                        {open2 ?
                              <div className='flex flex-col ml-4 text-left gap-3'>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">All Shoes</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Custom Shoes</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Jordan Shoes</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Running Shoes</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Basketball Shoes</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Football Shoes</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Gym & Training Shoes</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500 mb-2" href="/#">LifeStyle Shoes</a>
                              </div>
                              : <div></div>}

                        <button className='text-xl font-medium' onClick={handleOpen3}>Clothing</button>
                        {open3 ?
                              <div className='flex flex-col ml-4 text-left gap-3'>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">All Clothing</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Modest Wear</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Hoodies & Pullovers </a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Shirts & Tops</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Jackets</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Compression & Nike Pro</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Trouser & Leggings  </a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500 mb-2" href="/#">Shorts</a>
                              </div>
                              : <div></div>}

                        <button className='text-xl font-medium' onClick={handleOpen4}>Kids'<s></s></button>
                        {open4 ?
                              <div className='flex flex-col ml-4 text-left gap-3'>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Infant & Toddler Shoes</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Kids' Shoes</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Kids' Jordan Shoes</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Kids' Basketball Shoes</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Kids' Running Shoes</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Kids' Clothing</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500" href="/#">Kids' Backpacks</a>
                                    <a className="text-gray-700 font-medium hover:text-gray-500 mb-2" href="/#">Kids' Socks</a>
                              </div>
                              : <div></div>}
                  </div>

            </div>
      );
};

export default MobileDropdown;