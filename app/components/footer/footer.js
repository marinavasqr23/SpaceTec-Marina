import styles from './footer.css'
export default function Footer (){
    return (
<div className="Form">
    <form>
        <h2 id="cont">Entre em contato:</h2>
    <div className="Itensform">
                
        <input placeholder=" Name..." type="text"/>
        <input placeholder=" Email..." type="text"/>
        <input placeholder=" Number..." type="text"/>
        <input placeholder=" Subject..." type="text"/>
    <div className="Message">
        <input className="Message" placeholder=" Message..." type="text"/>
    </div> 
        <div className="Submit">
        
        <input type="submit" value="Enviar!"/>

        </div>
    </div>
    
    </form>
        
</div>
    ) 
}
 