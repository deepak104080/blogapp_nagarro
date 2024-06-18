import React, { useState } from "react";

const Child = (props) => {
  console.log("Props in Child", props);

  const { nameTemp, city } = props;


const obj = {
    title: '',
    description: '',
    likestatus: false
}
  const [formdata, setformdata] = useState(obj);

  const submit = () => {
    console.log('Formdata', formdata)
  }

  return (
    <>
      <p>This is child component</p>
      <p>Name = {props.nameTemp}</p>
      <p>City - {props.city}</p>

      <p>Name = {nameTemp}</p>
      <p>City - {city}</p>

      <br></br>

      <input type="text" name="" onChange={(e) => setformdata(...formdata) } />
        <button onClick={submit} className="button-submit">Submit</button>

    </>
  );
};

export default Child;
