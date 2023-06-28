import React from 'react';

const PhoneTile = ({name, size, charact}) => {
  return (
    <div className={'phone-tile'}>
      <p>Name: {name}</p>
      <p>Size: {size}</p>
      <p> Char: {charact}</p>
    </div>
  );
};

export default PhoneTile;