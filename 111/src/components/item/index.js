import React from "react";
import PropTypes from "prop-types";
import {getRubPriceLabel} from "../../utils";
import './style.css';
import {cn as bem} from "@bem-react/classname";

function Item(props) {

  const cn = bem('Item');

  return (
    <div className={cn()}>
      <div className={cn('code')}>{props.item.code}</div>
      <div className={cn('title')}>
        {props.item.title}
      </div>
      <div className={cn('price')}>{getRubPriceLabel(props.item.price)}</div>
      {
        props.item.amountInCart > 0 &&
        <div className={cn('amount')}>{props.item.amountInCart} шт</div>
      }
      <div className={cn('actions')}>
        {props.button}
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    amountInCart: PropTypes.number,
  }).isRequired,
  button: PropTypes.node.isRequired
};

export default React.memo(Item);
