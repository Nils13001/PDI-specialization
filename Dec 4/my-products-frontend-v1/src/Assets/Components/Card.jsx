import React from 'react'
import "../CSS/Card.css"
var Card = ({name, email, contact}) => {
  return (
    <div class="card">
    <img src="https://www.citypng.com/public/uploads/small/11639594360nclmllzpmer2dvmrgsojcin90qmnuloytwrcohikyurvuyfzvhxeeaveigoiajks5w2nytyfpix678beyh4ykhgvmhkv3r3yj5hi.png" alt="Avatar" className='img'/>
      <div class="container">
        <h4><b>{name}</b></h4> 
        <p>{email}</p>
        <p>{contact}</p> 
      </div>
    </div>
  )
}

export default Card