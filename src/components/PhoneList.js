import React from 'react';
import PhoneTile from "./phone-tile";
import {WithPhoneList} from "../hocs/showHOC";




function PhoneList( {show, showController, phoneData} ) {
/*
  const [count, setCount] = useState(0)
  const effect = () => {
    console.log(' effect !!!')
  }
  useEffect(() => {
    effect()
    return () => {
      setCount(0)
      console.log(count)
    }
  }, [count === 5])
*/

  return (
    <div className={'sale-zone'} >
      <p className={'title-sale-zone'}>My shop</p>
      {/*<button onClick={()=>setCount(count + 1)}>Count + </button>
      <p>{count}</p>*/}
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


export default WithPhoneList(PhoneList)