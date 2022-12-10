import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Detail = () => {
  
  const {id} = useParams();
  const [dentist, setDentist] = useState([]);

  useEffect(() => {
    getDentist();
  }, []);

  const getDentist = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const users = await data.json()
    setDentist(users);
  }

  return (
    <>
      <h1>Detail Dentist id</h1>
      <p>{dentist.name}</p>
      <p>{dentist.email}</p>
      <p>{dentist.phone}</p>
      <p>{dentist.website}</p>
    </>
  )
}

export default Detail