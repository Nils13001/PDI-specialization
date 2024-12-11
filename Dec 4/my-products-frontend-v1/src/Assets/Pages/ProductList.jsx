import React from 'react'
import products from "../Static/product.json"

const ProductList = () => {
  return (
    <div>
        <h1>ProductList</h1>
        <table border={2} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Description</th>
                <th>GST</th>
                <th>Price</th>
                <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product)=>(
                        <tr key={product.p_id}>
                            <td>{product.p_id}</td>
                            <td>{product.p_name}</td>
                            <td>{product.p_qty}</td>
                            <td>{product.p_desc}</td>
                            <td>{product.p_gst}</td>
                            <td>{product.p_price}</td>
                            <td>{product.p_cat}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ProductList