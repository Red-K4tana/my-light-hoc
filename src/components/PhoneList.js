import React from 'react';
import PhoneTile from "./phone-tile";


export const PhoneList = ( {show, showController, phoneData} ) => {

  return (
    <div className={'sale-zone'} >
      <p className={'title-sale-zone'}>My shop</p>
      <button onClick={showController}>HIDE</button>
      {show &&
        <div className={'phone-list'}>
        {phoneData.map((item, index) => {
          return (
            <PhoneTile key={index} charact={item.char} name={item.name} size={item.size}/>
          )
        })}
      </div>
      }
    </div>
  );
};
