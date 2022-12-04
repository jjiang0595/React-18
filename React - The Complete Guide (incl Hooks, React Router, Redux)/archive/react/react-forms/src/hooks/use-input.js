import {useReducer} from 'react'

const initialInputState = {
    value: '',
    isTouched: false
}

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return {value: action.value}
    }

    if (action.type === 'BLUR') {
        return {isTouched: true}
    }

    if (action.type === 'RESET') {
        return {...initialInputState}
    }
    return inputStateReducer
}

const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState)

    const isValid = validateValue(inputState.value);
    const isInvalid = !isValid && inputState.touched

    const onChange = event => {
        dispatch({type: 'INPUT', value: event.target.value})
    }

    const onBlur = event => {
        dispatch({type: 'BLUR'})
    }

    const reset = () => {
        dispatch({type: 'RESET'})
    }

    return {
        value: inputState.value,
        isValid: isValid,
        isInvalid,
        onChange,
        onBlur,
        reset
    }
}

export default useInput