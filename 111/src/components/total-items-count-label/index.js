import React from "react";
import PropTypes from "prop-types";
import {plural} from "../../utils";
import './style.css';

function TotalItemsCountLabel({totalItemsCount}) {

  const getPluralLabel = () => {
    return plural(totalItemsCount, {one: 'товар', few: 'товара', many: 'товаров'});
  }

  return (
    <span className="TotalItemsCountLabel">
      {totalItemsCount} {getPluralLabel()}
    </span>
  )
}

TotalItemsCountLabel.propTypes = {
  totalItemsCount: PropTypes.number.isRequired
};

export default React.memo(TotalItemsCountLabel);
