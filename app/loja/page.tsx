import Link from "next/link";
import styles from "@/app/loja/page.module.css"
import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import Head from "next/head";
import Image from "next/image";
import Phone from "../listphone/page";
export default function Home() {
  return (
    <>
    <Menu />
    <Phone />
    <Footer />

   </>
    
  )
}
