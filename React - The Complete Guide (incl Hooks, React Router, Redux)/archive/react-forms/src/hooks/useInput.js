import {useState} from 'react'

const useInput = (validateValue) => {
    const [value, setValue] = useState('')
    const [touched, setTouched] = useState(false)

    const isValid = validateValue(value);
    const isInvalid = !isValid && touched

    const onChange = event => {
        setValue(event.target.value)
    }

    const onBlur = () => {
        setTouched(true)
    }

    const reset = () => {
        setValue('')
        setTouched(false)
    }

    return {
        value,
        isValid,
        isInvalid,
        onChange,
        onBlur,
        reset
    }
}

export default useInput