import React, {useState, useEffect} from "react";

const Favs = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('favs'));
    if(items)
    setItems(items);
  }, [])

  const elements = items.map((item)=>
    <div className='card'>
      <p>{item.name}</p>
      <p>{item.email}</p>
      <p>{item.phone}</p>
      <p>{item.website}</p>
    </div>
  )

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {elements}
      </div>
    </>
  );
};

export default Favs;
