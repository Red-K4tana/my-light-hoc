import React from 'react';

const PhoneTile = ({name, size, charact}) => {
  return (
    <div className={'phone-tile'}>
      <p className={'phone-name'}>Name {name}</p>
      <p className={'phone-size'}>Size {size}</p>
      <p className={'phone-characteristics'}> Char {charact}</p>
    </div>
  );
};

export default PhoneTile;