import React, {useState} from "react";
import Child from "./Child.js";

const About = () => {


    // let name = "Deepak";

    // const obj = { }
    const [name, setName] = useState("Deepak");
    const [abc, def] = useState("");
    //const [count, setCount] = useState(0);
    // return an array - one state variable, one function to update the state variable
    // parameter passed in useState determines - type of variable and initial value
    // async mode
    // once setname function is complete, it will automatcall re-render the component

    const updateName = () => {
        setName("New Name");
        //console.log("Name - ", name);
    };

    // State or Props variable is updated, then component will re-render
    

    return (
        <>
            <div className="row bg-info bg-opacity-50">
                <div className="col-12">
                    <h2>About</h2>



                    <h1>Hello - {name}</h1>
                    <h2>Start editing to see some magic happen!</h2>

                    <button onClick={updateName}>Update Name</button>

                    <br></br>
                    <Child nameTemp={name} city="GGN" />
                </div>
            </div>
        </>
    )
}


export default About;