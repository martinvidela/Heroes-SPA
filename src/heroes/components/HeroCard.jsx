import React from "react";
import { Link } from "react-router-dom";
export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
  listCard,
  
}) => {
const imageUrl = `/src/assets/heroes/${id}.jpg`;

  return (
    <div key={id} className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={imageUrl} className="card-img" alt={superhero} /> 
          </div>
          <div className="col-8">
            <div className="card-body fs-3">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>Details...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
