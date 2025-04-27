// Task 2 - Create TourCard component with remove tour functionality

// Import React to enable the use of JSX and functional components.
import React from 'react';

// The TourCard component is responsible for rendering the details of a single tour. 
function TourCard({ tour, onRemove }) {
  // Destructure the tour object to extract its properties for easier access.
  const { id, name, info, image, price } = tour;

  return (
    // Render the tour card container with all its details.
    <div className="tour-card">
      <img src={image} alt={name} className="tour-card-img" />
      <h3 className="tour-card-title">{name}</h3>
      <p className="tour-card-info">{info}</p>
      <p className="tour-card-price">Price: ${price}</p>
      <button className="not-interested-button" onClick={() => onRemove(id)}>
        Not Interested
      </button>
    </div>
  );
}

// Export the TourCard component as the default export so it can be used in other parts of the application.
export default TourCard;