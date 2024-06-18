import { render } from "@testing-library/react";
import React, { useEffect, useState, useContext } from "react";

import { ContextData } from "./App";

const APICall = () => {

    const [count, setCount] = useState(0);

    const initialObj = {
        name: '',
        age: '',
        city: ''
    }

    const [formdata, setFormData] = useState(initialObj)

    //console.log('before useEffect - line number 8')

    useEffect(() => {
        console.log('Component rendered first time.')
    }, [])

    //console.log('after useEffect - line number 14')

    useEffect(() => {
        console.log('After re-mounting, count', count)

        //make api call
        //create a state variable
        //store data of api response in state variable
        //jsx - show state variables - variable, loop, condition
    }, [count])

    //useEffect as componentwillunmount

    const submitHandler = () => {
        console.log('form submitted.', formdata)
    }

    const changeHandler = (e) => {
        console.log(e.target.name, e.target.value);
        setFormData({...formdata, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        console.log('formdata - ', formdata)
    }, [formdata])

    //validations in form
    //reset form
    //formic library, useForm


    const localData = useContext(ContextData);

    console.log('@@@@@@@@@@@@@@Context LOcal Data - ', localData);

    return (
        <>

        <h2>Count - {count}</h2>
        <button onClick={() => setCount(count => count + 1)}>Count Update</button>


        <h2>Add Blog</h2>

        Name: <input type="text" name="name" onChange={(e) => changeHandler(e)}/><br></br>
        Age: <input type="number" name="age" onChange={(e) => changeHandler(e)} /><br></br>
        City: <input type="text" name="city" onChange={(e) => changeHandler(e)}/><br></br>

        <button onClick={submitHandler}>Submit</button>


        
        </>
    )
}

export default APICall;


// class {
//     constructor

//     ...

//     render {
//         return
//     }
// }


// stages and lifecycle methods

// mounting

// constructor
// render
// componentDidMount - useEffect



// re-render / re-mounting
// snapshotWillUpdate
// render
// componentDidUpdate - useEffect


// unmounting
// componentWillUnmount - useEffect

