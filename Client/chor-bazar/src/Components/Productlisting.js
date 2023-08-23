import React, { useEffect, useState } from 'react'

export default function Productlisting() {

    const [product, setProduct] = useState([]);

    const getProduct = () =>{
        var url = 'http://localhost:3000/products';
        
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setProduct(data)
        })
    }

    useEffect(() => {
        getProduct();
    }, [])

  return (
    <>
    <div>
        <table border="1">
            <thead>
                <th>Brand</th>
                <th>Product</th>
                <th>Price</th>
                <th>Stock</th>
            </thead>
            {
                product.map((pro)=> {
                    return<tr>
                            <td>{pro.brand_name}</td>
                            <td>{pro.product_name}</td>
                            <td>{pro.price}</td>
                            <td>{pro.stock}</td>

                        </tr>
                })
}
        </table>
    </div>
    </>
  )
}