import React,{useState,useEffect,createContext} from "react";
import axios from 'axios';
import Middle from "./Middle";
const API = "https://api.github.com/users";
const Middleapi = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getData(API);
  }, []);
  // ? API return promise--> so, here we handle the promise by async and await
  // ! url--> as an argument coming from useEffect hook
  //todo fetch is a method and it returns promise
  const getData = async (url) => {
    try {
      // it take url and retun an object  and all data available inside data array
      const response = await axios.get(url);
      const result = await response.data; // it return array
      if (result.length > 0) {
        setUser(result);
      }
    } catch (e) {
      console.error(
        "Error coming from api  go and see your api url is correct or not:" +
          e.message
      );
    }
  };
  return <Middle value={user} />;
};

export default Middleapi;
