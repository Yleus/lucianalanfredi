'use client';

import { playfair } from '../app/fonts';

const Main = () => {


    //   

    return ( 
        <div id="main" className="w-full h-fit bg-black text-white ">
            <div className="flex flex-col md:flex-row justify-center md:items-start mx-auto h-full gap-y-4 md:gap-x-52 md:py-20 bg-black  ">
                <div className="flex flex-col gap-6 pt-10 md:pt-0 md:flex-row items-center md:items-start  bg-black ">
                    
                        <h1 className={`${playfair.className}  uppercase font-bold break-words text-center md:text-start text-4xl max-w-[300px]  leading-[1.1] xl:max-w-[200px] xl:text-[80] ` }>
                            Change your life with design
                        </h1>
                        
                    
                    
                    <div className='flex flex-col gap-6 md:max-w-[300px] px-6'>
                        <div className='flex flex-col gap-1  break-words'>
                            <p>April 24</p>
                            <p>Until you learn that form does not matter, each form becomes a proper subject for the exercies for the day.</p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p>April 24</p>
                            <p>Until you learn that form does not matter, each form becomes a proper subject for the exercies for the day.</p>
                        </div>
                    </div>
                </div>        
                
                <div className="relative bg-[#fa7e61] p-2 flex justify-center md:rounded-full md:p-14">
                    <div className=" w-[300px] h-[500px] flex justify-center items-center bg-center bg-contain bg-no-repeat bg-[url('/images/teste.png')]">
                        <div className="w-[270px] h-[350px] max-w-280 max-h-500 overflow-auto mx-auto">
                            <img src="/static/images/screenlucy.png" alt="Imagem" className="max-w-full h-auto"/>                    
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Main;

//  <div className="w-[300px] h-[400px] max-w-300 max-h-400 overflow-auto  bg-slate-400"></div>
// </div>   


 




{/* <div className="flex justify-center items-center h-[400px] bg-slate-500">
                    <img src="/images/smartpng.png" alt="Imagem" className="w-full h-full "/>
                </div> */}