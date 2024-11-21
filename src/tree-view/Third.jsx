import React, { useState } from 'react'
import Second from './Second';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Third = ({item}) => {
  const[displayChildren, setDisplayChildren]=useState({})
  const[icon, setIcon] = useState(20);
  function handleToggle(currItemLabel){
        setDisplayChildren({...displayChildren, [currItemLabel]: !displayChildren[currItemLabel]}) 
        console.log(displayChildren);
        
  }
  return (
    <div>
      <li>
        <div className="block">
          {item.label}
          <span onClick={() => handleToggle(item.label)}>
            {item.children && !displayChildren[item.label] ? (
              <FaPlus  size={icon} className="icon" />
            ) : displayChildren[item.label] ? (
              <FaMinus size={icon} className="icon" />
            ) : null}
          </span>
        </div>

        {item.children && displayChildren[item.label] && (
          <Second menu={item.children}></Second>
        )}
      </li>
    </div>
  );
}

export default Third