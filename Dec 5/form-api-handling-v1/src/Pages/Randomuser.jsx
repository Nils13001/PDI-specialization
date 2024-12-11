import React, {useEffect, useState} from 'react'

function Randomuser() {
  
    const url = "https://randomuser.me/api/?results=1"
    const [apiData, setApiData] = useState([])

    useEffect( () => {
        fetch(url)
        .then( (response) => {
            console.log(response);
            
            return response.json()
        })
        .then ( (data) => {
            setApiData(data.results);
            console.log(data.results);
        })
        .catch( (err) => console.log("Error in fetching "+err))
    }, [])

    return (
        <div>
            <h1>Random User Details are: </h1>
            {
                apiData.map( (oneData) => (
                    <div>
                        <p>Name: {oneData.name.first} {oneData.name.last}</p>
                        <p>Email: {oneData.email}</p>
                        <br/>
                    </div>
                ))
            }
        </div>
    )

}

export default Randomuser