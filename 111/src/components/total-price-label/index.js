import React from "react";
import {getRubPriceLabel} from "../../utils";
import PropTypes from "prop-types";
import './style.css';

function TotalPriceLabel({totalPrice}) {
  return (
    <span className="TotalPriceLabel">
      {getRubPriceLabel(totalPrice)}
    </span>
  )
}

TotalPriceLabel.propTypes = {
  totalPrice: PropTypes.number.isRequired
};

export default React.memo(TotalPriceLabel);
