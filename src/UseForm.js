import React, { useState } from 'react';

export default function UseForm (initialValue=''){

    const [value,setValue]=useState(initialValue)

    return{
         onChange:(e)=>setValue(e.target.value),
         value
        
    }
  

}