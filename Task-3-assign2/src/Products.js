import ProductData from './products.json';
import ProductInfo from './ProductInfo';
import { useState } from 'react';
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from "@coreui/react";

export default function Products() {
    const [data, setData] = useState(ProductData)
    console.log(data)
    const [search, setSearch] = useState("")
    
    const sortbyTitle=()=>{
        const sortTitle = [...data].sort((a, b)=>a.title.localeCompare(b.title))
        setData(sortTitle)
    }
    const sortbyCategory=()=>{
        const sortCategory = [...data].sort((x, y)=>x.category.localeCompare(y.category))
        setData(sortCategory)
    }

    return(
        <div>
            <div id="Sort" className="container-fluid">
            <label>Sort By...</label>
            <button onClick={sortbyTitle}>Title</button>
            <button onClick={sortbyCategory}>Category</button>
            </div>
            <label>Search Products : </label>
            <input placeholder="Search..." onChange={(e)=>setSearch(e.target.value)}></input>
            
            <table>
                <tbody>
                <tr>
                    <th>Serial No</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Rating</th>
                </tr>
                
            
            {data.filter((value, index)=>{
                if(search===""){
                    return value.title
                }
                else if(value.title.toLowerCase().includes(search.toLowerCase())){
                    return value.title
                }
                else if (value.category.toLowerCase().includes(search.toLowerCase())){
                    return value.category
                }
                
            }).map((product, index) => (
                    <ProductInfo key={index} id={product.id} title={product.title} category={product.category} price={product.price} rating={product.rating.rate}/>
            ))}
            </tbody>
            </table>
        </div>
    )
}