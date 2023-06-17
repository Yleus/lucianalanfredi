'use client';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Main from '@/components/Main';
import Menu from '@/components/Menu';
import Services from '@/components/Services';

import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; 


export default function Home() {

  

  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 1800,
    });
  }, []);



  return (
    <div className='flex flex-col'>
      <Menu />      
      <Main />      
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}
