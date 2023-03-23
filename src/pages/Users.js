import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "../components/user";

const UsersPage = () => {
  const [users , setUsers] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3100/users')
   .then((res)=>{
    setUsers(res.data);
    console.log(res);
   })
   .catch((error)=>{
       console.error(error);
   });
  },[])

  return(
    <>
    <h2>usuarios:</h2>
    {users.map((user,index)=>{
      return(
        <span>
        <User user={user}/>
        </span>
      )
    })}
    </>
  );
};
export default UsersPage;
