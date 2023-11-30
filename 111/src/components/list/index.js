import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';
import {cn as bem} from "@bem-react/classname";

function List({list, onAddCartItem, onDeleteCartItem, deletionMode}) {

  const cn = bem('List');

  const handleButtonClick = (itemCode) => {
    deletionMode ?
      onDeleteCartItem(itemCode) :
      onAddCartItem(itemCode);
  }

  if (!(list.length > 0)) return <h3 className={cn('empty-label')}>Список пуст</h3>;

  return (
    <div className={cn()}>{
      list.map(item =>
        <div key={item.code} className={cn('item')}>
          <Item
            item={item}
            onDeleteCartItem={onDeleteCartItem}
            onAddCartItem={onAddCartItem}
            button={
              <button onClick={() => handleButtonClick(item.code)}>
                {deletionMode ? 'Удалить' : 'Добавить'}
              </button>
            }
          />
        </div>
      )}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onAddCartItem: PropTypes.func,
  onDeleteCartItem: PropTypes.func,
  deletionMode: PropTypes.bool
};

List.defaultProps = {
  onAddCartItem: () => {
  },
  onDeleteCartItem: () => {
  },
  deletionMode: false
}

export default React.memo(List);
