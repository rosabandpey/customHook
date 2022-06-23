import React from 'react';
import UseForm from "./UseForm";

export default function Form (){

    const username=UseForm()
    const password=UseForm()
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`ایمیل: ${username.value} \nپسورد: ${password.value}`)
    }

    return(

        <div>
            <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input {...username}/>
            <label>Password</label>
            <input {...password}/>
            <button type="submit">Submit</button>
            </form>
        </div>

    )

}