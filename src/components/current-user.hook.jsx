import { useState , useEffect } from 'react';
import axios from 'axios';


export const useCurrentUser = () => {
    const [user, setUser] = useState(null);

    // run once when the component mounts
    useEffect(() => {

        (async () => {
            const res = await axios.get("/current-user");
            setUser(res.data);
        })();

    } , [])

    return user;
};