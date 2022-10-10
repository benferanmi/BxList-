import {
  faGrip,
  faGripVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import defaultImage from '../../assets/image/lsams.png'

const Caritemlist = ({ props, items, handleCart }) => {
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
  const newId = new Date().getDate().toString()
  return (
    <div>
      <div className={gridStyle}>
        {items.map((currentItems) => (
          <div key={currentItems.title || newId} className="sectionone">
            <img
              src={currentItems.image || defaultImage}
              alt={`${currentItems.title|| "missing"}/ ${currentItems.class || "missing"}`}
            />
            <span>
              <h1>{currentItems.title || "missing title"}</h1>
              <p>{currentItems.class || "missing class"}</p>
              <p>{currentItems.start_production || 'missing start pro'}</p>
            </span>

            <div className="cart-buttons">
              <button type="button" onClick={() => handleCart(currentItems)}>Add to cart</button>
            </div>
          </div>
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

// Caritemlist.propTypes = {
//   image:PropTypes.object.isRequired,
//   class:PropTypes.object.isRequired,
//   title:PropTypes.object.isRequired
// }

export default Caritemlist;
