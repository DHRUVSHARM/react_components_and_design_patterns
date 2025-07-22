import axios from "axios";
import React, { useEffect, useState } from "react"
// loader component

export const CurrentUserLoader = ({children}) => {
    const [user, setUser] = useState(null);
    // runs only once on first render
    useEffect(() => {
        // on render run a call to the asyncronous function that will make the call to the api
        (async () => {
            const response = await axios.get("/current-user");
            setUser(response.data);
        })();
        
    } , [])

    return(
        <>
            {
                React.Children.map(children , (child) => {
                    if (React.isValidElement(child)){
                        return React.cloneElement(child , {user});
                    }
                    return child;
                })
            }
        </>
    )
}