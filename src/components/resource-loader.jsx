import axios from "axios";
import React, { useEffect, useState } from "react"
// loader component for different kinds of resources , making it more generic

export const ResourceLoader = ({resourceUrl , resourceName , children}) => {
    const [resource, setResource] = useState(null);
    // runs only once on first render
    useEffect(() => {
        // on render run a call to the asyncronous function that will make the call to the api
        (async () => {
            const response = await axios.get(resourceUrl);
            setResource(response.data);
        })();
        
    } , [resourceUrl])

    return(
        <>
            {
                React.Children.map(children , (child) => {
                    if (React.isValidElement(child)){
                        return React.cloneElement(child , {[resourceName] : resource});
                    }
                    return child;
                })
            }
        </>
    )
}