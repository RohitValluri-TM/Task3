const ProductInfo=(props)=>{
    return(
                <tr>
                    <td>{props.id}</td>
                    <td>{props.title}</td>
                    <td>{props.category}</td>
                    <td>{props.price}</td>
                    <td>{props.rating}</td>
                </tr>
       
    )
}

export default ProductInfo;