import React from "react";
import { useGlobalStates } from './utils/global.context.jsx'
import { Link } from 'react-router-dom'
const Card = ({item}) => {

  const { dispatchFavs } = useGlobalStates();

  const addFav = (item) => {
    dispatchFavs({type: 'ADD_FAV', payload: item});
  }
  
  return (
    <div className="card">
        <h1><Link to={`/Detail/${item.id}`}>{item.name}</Link></h1>
        <h1><Link to={`/Detail/${item.id}`}>{item.username}</Link></h1>
        <h1><Link to={`/Detail/${item.id}`}>{item.id}</Link></h1>
        
        {console.log("Item IDV: ", item)}
        <button onClick={() => addFav(item)} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
