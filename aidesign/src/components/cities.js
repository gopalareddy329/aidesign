

const Cities = ({eachcity})=> {
  
  
    return(
                
                
                      <div className='shadow shadow-xl    basis-[22%] text-center max-sm:w-[85%] max-lg:basis-[30.33%] max-lg:basis-[45.33%] '>
                        <img  className='w-full rounded-t-md h-[180px]' src={eachcity.image} alt='city-1'></img>
                        <div className='w-[80%] mx-auto max-h-[270px] mt-2 '>
                              <span className='font-bold text-[20px] '>{eachcity.name}</span><br></br>
                              <span className='w-[70px] break-normal font-regular max-h-[50px] text-[0.9vw] max-lg:text-[1.5vw] max-md:text-[2vw]'>{eachcity.description.slice(0,150)}... &nbsp;<b>learn more</b></span><br></br>
                              <button className='w-[70%] border border-solid border-[#370511] rounded-[50px] my-5 border-1 text-[12px] font-bold p-3'>Discover place</button>
                        </div>
                      </div>
                   
                     
            
              

    )
}

export default Cities;