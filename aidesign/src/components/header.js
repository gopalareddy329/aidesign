import backgroundimage from '../1.jpg'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'


const Header = () =>{
   const [changer,replacechanger]=useState(<AiOutlineMenu size='30px' key={1}/>)
   const changeIcon=(e)=>{
    const togglelist=document.querySelector(".open-close-toggle")
    if (changer.key === '1')
    {
      replacechanger(<AiOutlineClose size='30px' key={2}/>)
      togglelist.classList.replace('max-[1000px]:top-[-100%]','max-[1000px]:top-[9%]')
      
    }
    else{
      replacechanger(<AiOutlineMenu size='30px' key={1}/>)
      togglelist.classList.replace('max-[1000px]:top-[9%]','max-[1000px]:top-[-100%]')

    }
  }
    return(
        <div className="w-full  h-[600px]  block " style={{backgroundImage:`url(${backgroundimage})`, backgroundRepeat: 'no-repeat',backgroundSize:'100% 100%'}}>
            <div className="mx-auto w-[80%] h-20px max-[1000px]:mx-0 max-[1000px]:w-[100%]">
                  <div className="flex justify-between items-center p-5">
                        <div>
                            <h1 className="text-[2em] font-bold">Travel</h1>
                        </div>
                        <div className="flex gap-[2vw] items-center">
                            <div className="open-close-toggle flex gap-[2vw] text-[16px] font-regular  min-[1000px]:whitespace-nowrap max-[1000px]:flex-col max-[1000px]:justify-center max-[1000px]:w-fit max-[1000px]:px-[30px] max-[1000px]:gap-[25px] max-[1000px]:absolute max-[1000px]:h-[200px] max-[1000px]:top-[-100%] max-[1000px]:bg-white max-[1000px]:border border-solid border-1 border-gray ">
                                <a className='hover:text-[18px]' href="/">Home</a>
                                <a className='hover:text-[18px]' href="/">Tour Packages</a>
                                <a className='hover:text-[18px]' href="/">Contact</a>
                                <a className='hover:text-[18px] relative' href="/">About</a>
                            </div>
                            <div className='flex items-center gap-[2vw]'>
                                <a href="/" className="rounded-[50px] px-4 py-1.5 text-white font-bold bg-[#370511] border border-solid border-1 border-black hover:text-[18px]">Explore places</a>
                                <span className='cursor min-[1000px]:hidden' onClick={changeIcon} >{changer}</span>
                            </div>
                            
                        </div>
                  </div>

            </div>


            <div className='w-[80%] h-[80%] mx-auto'>
                <div className='h-full flex flex-col justify-center '>
                      <h1 className='font-bold text-[3rem] mb-1 max-sm:text-[2rem]'>Book an exclusive</h1>
                      <h2 className='text-[1.6rem] font-regular max-sm:text-[1rem]'>home for your personal travel</h2>
                      <div className='font-regular text-[16px] p-5 py-7 max-sm:text-[12px]'>
                          <span>Each property is hand-picked,</span><br></br>
                          <span>personally visited and cannot be found elsewhere.</span>
                      </div>
                      <button className='rounded-[50px] px-2 py-1.5 text-white font-bold bg-[#370511] border border-solid border-1 border-black w-40 max-sm:w-30'>Explore homes</button>
                </div>
              
            </div>

            
        </div>
    )
}

export default Header;