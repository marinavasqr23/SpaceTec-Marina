import Link from "next/link";
import styles from './page.module.css'
import Menu from './components/menu/menu'
import Services from './components/services/services';
import Form from './components/footer/footer';
import About from './components/about/about';
import Head from "next/head";
import Image from "next/image";
import Banner from './components/banner/banner';
export default function Home() {
  return (
    <>
    <Menu />
    <Banner />
   <div className="Home">
    <Services />
    <About />
    <Form />
    

   </div>
   </>
    
  )
}

