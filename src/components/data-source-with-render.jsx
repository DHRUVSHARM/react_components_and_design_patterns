// resource loader but we do not know where the data is coming from as well , basically we can extract out the method we use to fetch data
// that way it can be a loader that can take the axios call, or it can be something else
// with the render prop pattern
import axios from "axios";
import React, { useEffect, useState } from "react"
// loader component for different kinds of resources , making it more generic

export const DataSourceWithRender = ({ getData = () => {}, render}) => {
    const [resource, setResource] = useState(null);
    // runs only once on first render
    useEffect(() => {
        // on render run a call to the asyncronous function that will make the call to the api
        (async () => {
            // at this point we expect that the getData function will return the parsed data we need
            const data = await getData();
            setResource(data);
        })();
        
    } , [getData])

    return(
    
            render(resource)
    
    )
}