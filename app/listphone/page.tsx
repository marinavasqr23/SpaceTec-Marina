import axios from "axios";
import styles from "@/app/loja/page.module.css"
import Image from "next/image";
type Phones ={
    nome: string;
    preco: string;
    descricao: string;
    img: string;
};
const GetData = async () => {
    const res = await axios.get<Phones[]>('https://apitrainees.herokuapp.com/celulares');
    return res.data;
    };

export default async function Phone (){
    
      
    
    const response = await GetData();
    return(
        
    
        <div className="bg-black LOJA">
        
        
        {response.map((phone) => (
        
        <div className=" Produtos flex flex-row justify-around p-10 align-center" key={phone.nome}>
            <a className="Img m-30" key={phone.nome}><img src={phone.img} alt={phone.nome} width={150} height={150}/></a> 
             <p  className="flex flex-row text-white m-30 pt-10 font-normal" key={phone.nome}>{phone.nome}</p> 
             <p className="m-30 pt-10 font-sm" key={phone.nome}>{phone.descricao}</p>
             <p className="text-white m-30 pt-10 pb-0" key={phone.nome}>{phone.preco}</p> 
             <button className="text-white font-bold m-30 p-0 m-0 bg-gree box-content h-16 w-24 rounded-md border-white border-2">COMPRAR</button>
        </div>
        
        ))}
        
        
        
        </div>
    )
    
}
