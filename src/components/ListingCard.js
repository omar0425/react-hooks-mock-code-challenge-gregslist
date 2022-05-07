import React,{useState} from "react";

function ListingCard({listing, onDelete}) {
  const {id, image, description, location} = listing

  const [star, setStar] = useState(false)

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${id}`,{
      method: "DELETE"
    })
    .then(r => r.json())
    .then(()=>{
      onDelete(id)
    })
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {star ? (
          <button onClick= {() => setStar(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={()=> setStar(true)}className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete}className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
