import React, {useEffect, useState} from 'react'

function Products() {
  
    const url = "https://dummyjson.com/products"
    const [apiData, setApiData] = useState([])

    useEffect( () => {
        fetch(url)
        .then( (response) => {
            return response.json()
        })
        .then ( (data) => {
            setApiData(data.products);
            console.log(data.products);
        })
        .catch( (err) => console.log("Error in fetching "+err))
    }, [])

    return (
        <div>
            <h1>Products Details are: </h1>
            {
                apiData.map( (oneData) => (
                    <div>
                        <p><b>Title:</b> {oneData.title}</p>
                        <p><b>Description:</b> {oneData.description}</p>
                        <p><b>Category:</b> {oneData.category}</p>
                        <p><b>Brand:</b> {oneData.brand}</p>
                        <p><b>Price:</b> {oneData.price}</p>
                        <br/>
                    </div>
                ))
            }
        </div>
    )

}

export default Products