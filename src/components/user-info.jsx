import { useCurrentUser } from "./current-user.hook";
import { useResource } from "./resource.hook";
import { useUser } from "./user.hook";
import { useDataSource } from "./data-source.hook";
import axios from "axios";
import { useCallback } from "react";


const fetchFromServer = (resourceUrl) => async () => {
  const response = await axios.get(resourceUrl);
  return response.data;
}

const getFromLocalStorage = (key) => () => {
  const data = localStorage.getItem(key);
  return data;
}

export const UserInfo = ({userId}) => {

  // think of these as state variables that are tied to a data source

  // on initial render, we will use the hook to fetch the current user, a copy of the function is passed and it triggers the fetch 
  // however, since it is an object, it will trigger a re-render unlike message, which is a primitive value
  // that will cause rerender and then because the function is not cached, it will trigger rerender in the datasource function again, 
  // returning a new object and the cycle continues

  // so only for user let us cache the function that fetches the user data, and only change it when the userId changes
  const fetchUser  = useCallback(fetchFromServer(`/users/${userId}`), [userId]);
  const user = useDataSource(fetchUser);
  const msg = useDataSource(getFromLocalStorage("message"));
  
  const { name, age, country, books } = user || {};
  
  console.log("rendering")
  
  return user ? (
    <>
      {
        msg ? (
          <h1>{msg}</h1>
        ) : (
          <h1>No message found from local storage</h1>
        )
      }
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}> {book} </li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

/*
export const UserInfo = ({ user }) => {
  const { name, age, country, books } = user || {};
  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}> {book} </li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
*/