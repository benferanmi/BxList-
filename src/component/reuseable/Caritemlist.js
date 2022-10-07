import {
  faGrip,
  faGripHorizontal,
  faGripVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";

const Caritemlist = ({ props, items }) => {
  //styles usestate for grid changing options
  const [gridStyle, setgridStyle] = useState("sectionone-submain");
  const changeStyleOne = () => {
    setgridStyle("sectionone-submainone");
  };
  const changeStyleTwo = () => {
    setgridStyle("sectionone-submaintwo");
  };
  const changeStyleThree = () => {
    setgridStyle("sectionone-submainthree");
  };

  return (
    <div>
      <div className={gridStyle}>
        {items.map((currentItems) => (
          <div key={currentItems.title} className="sectionone">
            <img
              src={currentItems.image}
              alt={`${currentItems.title}/ ${currentItems.class}`}
            />
            <span>
              <h1>{currentItems.title}</h1>
              <p>{currentItems.class}</p>
              <p>{currentItems.start_production}</p>
            </span>
          </div>
          // <ul key={currentItems.title}>
          //  <div className='car-list-li'>
          //  <li><img src={currentItems.image} alt={currentItems.title + "image"}/></li>
          //   <li>{currentItems.class}</li>
          //   <li>{currentItems.discription}</li>
          //  </div>
          // </ul>
        ))}
      </div>

      <div className="grid-styles">
        <button type="button" onClick={changeStyleOne}>
          one
        </button>
        <button type="button" onClick={changeStyleTwo}>
          <FontAwesomeIcon icon={faGripVertical} />
        </button>
        <button type="button" className="button3" onClick={changeStyleThree}>
          <FontAwesomeIcon icon={faGrip} />
        </button>
      </div>
    </div>
  );
};

export default Caritemlist;
