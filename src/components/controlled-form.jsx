import { useState , useEffect } from "react"

export const ControlledForm = () => {
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    // since the state is available from outside the component as it is controlled 
    // we can do something like validation 
    useEffect(() => {
        if (name.length < 3) {
            setError("Name must be at least 3 characters long");
        }
        else{
            setError("");
        }
    } , [name]);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(age);
    }

    return (
        <form onSubmit={submitHandler}>
            {error && <p style={{color: "red"}}>{error}</p>}
            <input name="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
            <input name="age" type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)}></input>
            <input type ="submit" value="Submit"></input>
        </form>
    )
}