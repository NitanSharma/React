import Product from "./Product";
import "./Card.css"
 
function Card(){
    // let feature = [<li>"Good"</li>  , <li>"durable"</li>  , <li>"hi-tech"</li> ];
    let feature = ["Good" , "Pointy"];
    console.log(feature);
    return(
        <div className="card">
        <Product title="Laptop" description="This is good" features={feature} />
        <Product title="Pen" description="This is simple pen" features={["Pointy" , " " , "Blue Color"]} />
        <Product  title="Orange" description="I love Orange"  />
        </div>
    );
}
export default Card;