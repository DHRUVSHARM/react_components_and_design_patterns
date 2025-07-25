import { useState , useEffect, use } from 'react';
import axios from 'axios';


export const useUser = (userId) => {
    const [user, setUser] = useState(null);

    // run once when the component mounts
    useEffect(() => {

        (async () => {
            const res = await axios.get(`/users/${userId}`);
            setUser(res.data);
        })();

    } , [userId])

    return user;
};