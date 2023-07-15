import { useState,useEffect } from 'react'
import Cities from './components/cities.js'
import Header from './components/header.js'
import database from './data.json'
import Footer from './components/footer.js'



const App = () =>{
  const [data,changeData] = useState([])
  useEffect(()=>{
    changeData(database)
  },[])

  


  return(
    
      <div className="h-screen w-full block poppins">
        
        <Header/>


            <div className="w-full my-[5em]">
            
                  <div className='w-[90%] mx-auto flex  flex-warp flex-col'>
                              <div className='text-center block'>
                                  <h1 className='font-bold text-[2em]'>Most famous places</h1>
                                  <span className='font-regular text-[16px]'>Recommended</span>
                              </div>
                              
                                  <div className='w-[100%] flex flex-wrap gap-5 mt-20 max-sm:flex-col items-center'>
                                        {data.map((item)=> <Cities key={item.name} eachcity={item}/> )}
                                  </div>
                              
                  </div>
            
            </div>



        <footer >
          <Footer/>

        </footer>


      </div>

      


  )
}

export default App;
