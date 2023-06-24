import styles from './banner.css'
import Link from 'next/link'
export default function Banner(){
    return(
            <div className="top">
                <h1 className="titulo text-white">O espaço do seu Smartphone</h1>
                <div className="Botao">
                
                <Link href="/loja">LOJA</Link>
                </div>
                    
                
                
            </div>
    )
}