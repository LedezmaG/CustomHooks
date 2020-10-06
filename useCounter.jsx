import React from 'react'
import { useState } from 'react'

export const useCounter = ( initialState = 10 ) => {
    
    const [ counterd, setCounter ] = useState(initialState);

    const reset = ( ) => {
        setCounter( initialState )
    }

    const increment = ( ) => {
        setCounter ( counterd + 1 )
    } 

    const decrement = ( ) => {
        setCounter ( counterd - 1 )
    } 

    return{
        counter: counterd,
        increment,
        decrement,
        reset
    }
} 

export default useCounter