import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import {cn as bem} from "@bem-react/classname";
import TotalPriceLabel from "../total-price-label";
import TotalItemsCountLabel from "../total-items-count-label";

function Controls({onCartOpen, totalPrice, totalItemsCount}) {

  const cn = bem('Controls');

  return (
    <div className={cn()}>
      <div className={cn('price')}>
        <span className={cn('price-text')}>В корзине:</span>
        <span className={cn('price-value')}>
          {
            totalItemsCount > 0 ?
              <>
                <TotalItemsCountLabel totalItemsCount={totalItemsCount}/> / <TotalPriceLabel totalPrice={totalPrice}/>
              </> : 'пусто'
          }
        </span>
      </div>
      <button onClick={() => onCartOpen()}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  onCartOpen: PropTypes.func,
  totalPrice: PropTypes.number,
  totalItemsCount: PropTypes.number
};

Controls.defaultProps = {
  onCartOpen: () => {
  },
  totalPrice: 0,
  totalItemsCount: 0
}

export default React.memo(Controls);
