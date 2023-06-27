import React from 'react';
import PhoneTile from "./phone-tile";
import {phones} from "../data";

const PhoneList = () => {
  return (
    <div className={'sale-zone'}>
      <p className={'title-sale-zone'}>My shop</p>
      <div className={'phone-list'}>
        {phones.map(item => {
          return (
            <PhoneTile charact={item.char} name={item.name} size={item.size}/>
          )
        })}
      </div>
    </div>
  );
};

export default PhoneList;