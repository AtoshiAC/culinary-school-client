import React from 'react';

const InstructorCard = ({ instructor }) => {
    const { image, name, description, students } = instructor;
  return (
    <div>
      <div className="card w-96 glass shadow-xl">
        <figure>
          <img src={image} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>Already Enrolled: {students}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;