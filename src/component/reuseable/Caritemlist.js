import {
  faGrip,
  faGripVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';

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

Caritemlist.propTypes = {
  image:PropTypes.object.isRequired,
  class:PropTypes.object.isRequired,
  title:PropTypes.object.isRequired
}

export default Caritemlist;
