import React from 'react';

const TourCard = ({ tour, removeTour }) => {
  const { id, name, info, image, price } = tour;

  return (
    <div className="tour-card">
      <img src={image} alt={name} />
      <div className="tour-info">
        <h3>{name}</h3>
        <h4>${price}</h4>
        <p>{info}</p>
        <button onClick={() => removeTour(id)}>Not Interested</button>
      </div>
    </div>
  );
};

export default TourCard;