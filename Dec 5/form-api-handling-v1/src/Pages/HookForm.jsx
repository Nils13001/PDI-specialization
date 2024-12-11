import React from 'react'

import { useForm } from 'react-hook-form'

const HookForm = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()

    function DisplayData(data) {
        alert(`Data received successfully\nName: ${data.name}\nEmail: ${data.email}\nGender: ${data.gender}`)
    }

    return (
    <div>
        <form onSubmit={handleSubmit(DisplayData)}>
            <label>Full Name: </label>
            <input
            {...register('name', {
                required:"Full Name",
                pattern:{
                    value: /^[A-Za-z]+$/,
                    message: "Only Letters"
                }
            })}
            type='text' />
            <br/>
            {errors.name && <p style={{color:'red'}}>{errors.name.message}</p>}

            <label>Email: </label>
            <input
            {...register('email', {
                required:"Personal Email",
                pattern:{
                    value:/^[A-Za-z][A-Za-z0-9]+@[a-z]+[.][a-z]+$/,
                    message:"Enter correct email",
                },
            })}
            type='email' />
            <br/>
            {errors.email && <p style={{color:'red'}}>{errors.email.message}</p>}

            <label>Gender: </label>
            <input
            {
                ...register("gender",{
                    required:"Required"
                })
            } type='radio' value="M"
            />Male
            <input
            {
                ...register("gender",{
                    required:"Required"
                })
            } type='radio' value="F"
            />
            Female
            <br/>
            <label>City</label>
            <select
                {...register("city")}>
                    <option value="GAU">Guwahati</option>
                    <option value="BLR">Bangalore</option>
            </select>
            <br/>
            <label>Password: </label>
            <input
            {...register('password')}
            type='password' />
            <br/>

            <input type='submit' value="Submit" />

        </form>
    </div>
  )
}

export default HookForm