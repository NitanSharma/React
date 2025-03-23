import "./Product.css"

export default function Product({title, description,features}){
    // const list = features.map((el) => <li>{el}</li>)
    return (
        <div className="Product">
        <h2>{title}</h2>
        <h5>{description}</h5>
       
        <p>{features.map((el) => <li>{el}</li>)}</p>
        </div>
    )
}