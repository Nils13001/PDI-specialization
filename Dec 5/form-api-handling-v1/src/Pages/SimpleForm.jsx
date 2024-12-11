import React, { useState } from 'react'

const SimpleFormPage = () => {

    const [formData, setFormData] = useState({
        fname: '',
        email: '',
        password: '',
    })

    function DisplayData(event){
        event.preventDefault();
        alert(`Data received successfully ${formData.fname}`)
    }

    function seetingValue(event){
        console.log("calling seeting value function");
        const { name, value} = event.target;
        setFormData({ ...formData,[name] : value })
        //fname : akshay, email : aksha@gmail.com
    }
  return (
    <div>
        <form onSubmit={DisplayData}>
            <label>Full Name :</label>
            <input type='text'
            name='fname'
            value={formData.fname}
            onChange={seetingValue}
            />

            <br/>

            <label>Email :</label>
            <input type="email" 
            name='email'
            value={formData.email}
            onChange={seetingValue}
            />

            <br />

            <label>Password :</label>
            <input type="password"
            name='password'
            value={formData.password}
            onChange={seetingValue}
            />

            <br />

            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default SimpleFormPage