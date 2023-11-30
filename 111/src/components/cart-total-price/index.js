import React from "react";
import PropTypes from "prop-types";
import {cn as bem} from "@bem-react/classname";
import TotalPriceLabel from "../total-price-label";
import './style.css';

function CartTotalPrice({totalPrice}) {

  const cn = bem('CartTotalPrice');

  if (totalPrice <= 0) return null;

  return (
    <div className={cn()}>
      <span className={cn('summary-text')}>Итого</span>
      <TotalPriceLabel totalPrice={totalPrice}/>
    </div>
  );
}

CartTotalPrice.propTypes = {
  totalPrice: PropTypes.number.isRequired
};

export default React.memo(CartTotalPrice);
