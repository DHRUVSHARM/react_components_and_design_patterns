import { useState , useEffect, use } from 'react';
import axios from 'axios';


// generic even in terms of what we are fetching, ie; the resource , can be fetched from different endpoints, hence the resourceUrl
export const useResource = (resourceUrl) => {
    const [resource, setResource] = useState(null);

    // run once when the component mounts
    useEffect(() => {

        (async () => {
            const res = await axios.get(resourceUrl);
            setResource(res.data);
        })();

    } , [resourceUrl])

    return resource;
};