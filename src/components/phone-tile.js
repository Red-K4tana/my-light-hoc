import React from 'react';

const PhoneTile = ({name, size, charact}) => {
  return (
    <div className={'phone-tile'}>
      <p className={'phone-name'}>{name}</p>
      <p className={'phone-size'}>{size}</p>
      <p className={'phone-characteristics'}>{charact}</p>
    </div>
  );
};

export default PhoneTile;