import { useState } from 'react'

const useForm = ( initialState = {} ) => {

    const [values, setvalues] = useState( initialState )

    const reset = () => {
        setvalues( initialState )
    }

    const handleImputChange = ({ target }) => {
        setvalues({
            ...values,
            [ target.name ]: target.value
        })
    }   
    
    return [ values, handleImputChange, reset ]

}

export default useForm
