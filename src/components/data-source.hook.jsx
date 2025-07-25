import { useState , useEffect, use } from 'react';
import axios from 'axios';


// generic even in terms of what we are fetching, ie; the resource , can be fetched from different endpoints, hence the resourceUrl
export const useDataSource = (getData) => {
    const [resource, setResource] = useState(null);

    // run once when the component mounts
    useEffect(() => {

        (async () => {
            const data = await getData();
            setResource(data);
        })();

    } , [getData])

    return resource;
};