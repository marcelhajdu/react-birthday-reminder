import React from "react";

const List = ({ image, id, name, age }) => {
  return (
    <div className="person img">
      <img src={image} alt="" />
      <p>{id}</p>
      <p>{age}</p>
      <p>{name}</p>
    </div>
  );
};

export default List;
