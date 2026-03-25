import { useState } from 'react'

export default function Counter() {

    const initialState = {
        counter: 0,
        textInput: undefined
    }

    const [state, setState] = useState(initialState);

    // const [counter, setCount] = useState(0);
    // const [textInput, setTextInput] = useState();


    // const arr = useState();
    // const counter = arr[0];
    // const setCount = arr[1];

    const handleClick = () => {
        const obj = {state};
        const normalObj = {state: state}
        const spreadObj = {...state};

        console.log('obj:', obj);
        console.log('normalObj: ', normalObj);
        console.log('spreadObj: ', spreadObj);

        // const newState = {
        //     ...state, 
        //     counter: state.counter + 1
        // }
        // setState(newState);        
    }

    return (
        <div>
            <button onClick={() => handleClick()}>Click Me!</button>
            <p>You clicked me: {state.counter}  times</p>
            <input type='text' onChange={({
                target: {
                    value
                } = {}
            }) => setState({...state, textInput: value})} />
            <p>{state.textInput}</p>
        </div>
    )
}