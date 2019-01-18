import React from 'react';
import './styles.css'

const Item = ({ name, title, logoUrl, url }) => (
  <div className="Item">
    <img src={logoUrl} alt={title}/>
    <div className="Item-title">{name}</div>
  </div>
);

export default Item;
