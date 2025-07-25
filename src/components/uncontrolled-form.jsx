// does not leak any of its state, so we can externally, modify its state
import React from "react";
export const UncontrolledForm = () => {
    const nameInputRef = React.createRef();
    const ageInputRef = React.createRef();

    const submitHandler = (e) => {
        console.log(nameInputRef.current.value);
        console.log(ageInputRef.current.value);
        e.preventDefault();
    }

    return (
        <form onSubmit={submitHandler} >
            <input name="name" type="text" placeholder="Name" ref={nameInputRef}></input>
            <input name="age" type="text" placeholder="Age" ref={ageInputRef}></input>
            <input type ="submit" value="Submit"></input>
        </form>
    )
}