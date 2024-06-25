import s1 from '../assests/spotlight/s1.png'
import s2 from '../assests/spotlight/s2.png'
import s3 from '../assests/spotlight/s3.png'
import s4 from '../assests/spotlight/s4.png'


function Spotlight() {
      return (
            <>
                  <div className="flex ml-10 mt-20 font-semibold text-2xl">
                        <p>Classics Spotlight</p>
                  </div>

                  <div className='hidden md:block'>
                        <div className='media-scroller-spotlight'>
                        <div className='flex gap-5 ml-10 mt-6'>
                              <img className='h-[460px]' src={s1} alt="" />
                              <img className='h-[460px]' src={s2} alt="" />
                              <img className='h-[460px]' src={s3} alt="" />
                              <img className='h-[460px]' src={s4} alt="" />
                        </div>
                        </div>
                        
                  </div>


                  
                  <div className='md:hidden'>
                        <div className='media-scroller'>
                        <div className='flex gap-5 ml-10 mt-6'>
                              <img className='h-[300px] w-[250px]' src={s1} alt="" />
                              <img className='h-[300px] w-[250px]' src={s2} alt="" />
                              <img className='h-[300px] w-[250px]' src={s3} alt="" />
                              <img className='h-[300px] w-[250px]' src={s4} alt="" />
                        </div>
                        </div>
                  </div>


            </>
      )
}

export default Spotlight