'use client';
import Image from "next/image";
import { AiFillInstagram, AiOutlineForm } from "react-icons/ai";
import Link from "next/link";
import { playfair } from '../app/fonts';

const Contact = () => {
    return ( 
      


            <div id="contact" className=" w-full h-fit bg-black text-white p-4">
                    <div className="flex flex-col md:flex-row-reverse justify-center md:items-start mx-auto h-full gap-y-4 md:gap-x-52 md:py-20 bg-black">
                        <div className="flex flex-col   break-words text-start  max-w-[400px]  leading-[1.1] xl:max-w-[400px] ">
                            <h2 className={`${playfair.className} text-4xl font-bold pb-2 md:pb-4 uppercase`}>Contact</h2>
                            <p className="tracking-wide leading-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, aliquid ipsa voluptas non laborum odit officia fugit magnam est optio sed ducimus eum sapiente quod harum numquam consectetur distinctio accusamus?</p>
                            <div className="flex justify-center md:justify-start gap-8 mt-4">
                                <Link href="https://www.instagram.com/lulanfr3di/" target="_blank" passHref className="uppercase bg-[#fa7e61] p-2 rounded-lg flex justify-center gap-1 items-center hover:bg-orange-700">                   
                                    Instagram <AiFillInstagram />            
                                </Link>
                                <Link href="https://online.forms.app/lulanfr3di/bookingform" target="_blank" passHref className="uppercase bg-[#fa7e61] p-2 rounded-lg flex justify-center gap-1 items-center hover:bg-orange-700">                   
                                    Form <AiOutlineForm/>       
                                </Link>                
                
                            </div>
                        </div>
                        
                        <div className="bg-white rounded items-center flex justify-center">
                            <Image  
                                src="/jewelthree.png"
                                width={300}
                                height={300}
                                alt=""/>
                        </div>
                        
                    </div>
                </div>
     );
}
 
export default Contact;