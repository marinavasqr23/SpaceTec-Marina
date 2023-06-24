import styles from './services.css'
import Image from 'next/image'
export default function Services (){
    return (
<div className="Services">
        <div className="Primeiro">
         <div className="Segurity">
        <Image src="/elipse1.png" alt="Planeta" width={80} height={80} />
        <h3>DIVERSIDADE</h3>
        <p>Oferecemos uma diversidade de aparelhos celulares de todas as gerações e marcas.</p>
        </div>
            
        <div className="Old">
        <Image src="/elipse2.png" alt="Lua" width={80} height={80} />
        <h3>OLD PHONE</h3>
        <p>Avaliamos seu celular antigo para desconto em novos aparelhos.</p>
        </div>      
        </div>
        
        <div>
          <div className="Commerce">
        <Image src="/elipse3.png" alt="Planeta" width={80} height={80} />
        <h3>ASSISTÊNCIA</h3>
        <p>Oferecemos assistência técnica, com descontos para clientes da loja, e suporte pós-venda.</p>
        </div>

        <div className="Outro">
        <Image src="/elipse4.png" alt="Planeta" width={80} height={80} />
        <h3>PLANOS</h3>
        <p>Faça seu plano de telefonia conosco.</p>
        </div>    
        </div>
        

    
</div>
)
      
}
 
