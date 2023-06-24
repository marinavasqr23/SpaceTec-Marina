import styles from './menu.css'
import Link from 'next/link'
import Image from 'next/image'
export default function Menu (){
          return (
<nav>
    <div className="Menu">
        <div className="Logo">
            <img src="/logo.jpg" width="70" height="40" alt="Space Tec"/>
           <h1>SPACE TEC</h1>
        </div>
        
        <div className="Itens-menu"> 
        
            <Link href="/">HOME</Link>
            <Link href="/loja">LOJA</Link>
        </div>
    </div>   
</nav>            

)
}
