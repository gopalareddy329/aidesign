import {AiOutlineGithub,AiOutlineLinkedin} from 'react-icons/ai'

const Footer  = () =>{
    return(
        <div className='flex justify-between h-[300px]  max-sm:flex-col   max-sm:flex-warp max-sm:h-[550px] bg-black  text-white items-center p-[6rem]'>
                <div className='font-bold text-[2em]'>
                    <h1>Travel</h1>
                </div>
                <div className='flex flex-row max-sm:w-[300px] max-sm:justify-between max-sm:h-full gap-20 max-sm:whitespace-nowarp max-sm:my-5'>
                    <div className='font-regular text-[16px]   whitespace-nowarp leading-[3vw] max-sm:leading-[8vw]'>
                        <span>Tour packages</span><br></br>
                        <span>Special deals</span><br></br>
                        <span>Summer holiday</span><br></br>
                    </div>

                    <div className='font-regular text-[16px]  max-sm:text-center  whitespace-nowarp leading-[3vw] max-sm:leading-[8vw]'>
                        <span>About us</span><br></br>
                        <span>FAQ</span><br></br>
                        <span>Terms and conditions</span><br></br>
                        <span>Contact</span><br></br>
                    </div>
                </div>
                <div>
                    <span>Follow us on</span>
                    <div className='flex justify-center'>
                    <span><a href='https://github.com/gopalareddy329'><AiOutlineGithub size='30'/></a></span>
                    <span><a href='https://www.linkedin.com/in/padala-t-m-adi-venu-gopala-reddy-a5a402283'><AiOutlineLinkedin size='30'/></a></span>
                    </div>
                </div>
          </div>

    )
}


export default Footer;