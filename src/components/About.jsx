'use client';

import Image from "next/image";
import { playfair } from '../app/fonts';


const About = () => {
  


    return ( 
        

    <div id="about" className=" w-full h-fit bg-black text-white p-4">
        <div className="flex flex-col md:flex-row-reverse justify-center md:items-start mx-auto h-full gap-y-4 md:gap-x-52 md:py-20 bg-black">
            <div className="flex flex-col  break-words text-start  max-w-[400px]  leading-[1.1] xl:max-w-[400px] ">
                <h2 className={`${playfair.className} text-4xl font-bold pb-2 md:pb-4 uppercase`}>About</h2>
                <p className="tracking-wide leading-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, aliquid ipsa voluptas non laborum odit officia fugit magnam est optio sed ducimus eum sapiente quod harum numquam consectetur distinctio accusamus?</p>
            </div>
            
            <div className="bg-white rounded items-center flex justify-center">
                <Image  
                    src="/jeweltwo.png"
                    width={300}
                    height={300}
                    alt="ASDASAS"/>
            </div>
            
        </div>
    </div>
     );
}

 
export default About;

