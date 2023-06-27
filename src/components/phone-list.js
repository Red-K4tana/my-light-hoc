import React from 'react';
import PhoneTile from "./phone-tile";
import {phones} from "../data";

const PhoneList = () => {
  return (
    <div className={'phone-list'}>
      {phones.map(item => {
        <PhoneTile charact={item.char} name={item.name} size={item.size}/>
      })}
    </div>
  );
};

export default PhoneList;