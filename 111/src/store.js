import {generateCode} from "./utils";

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  getTotalItemsCount() {
    return this.state.cartItems.length;
  }

  getTotalPrice() {
    return this.state.cartItems.reduce((acc, item) => acc + item.price * item.amountInCart, 0);
  }

  getItemByCode(code) {
    return this.state.list.find((item) => item.code === code);
  }

  addCartItem(code) {
    if (this.state.cartItems.find((selectedItem) => selectedItem.code === code)) {
      this.setState({
        ...this.state,
        cartItems: this.state.cartItems.map((item) => {
          if (item.code !== code) return item;
          return {
            ...item,
            amountInCart: item.amountInCart + 1
          }
        })
      })
    } else {
      this.setState({
        ...this.state,
        cartItems: [
          ...this.state.cartItems,
          {
            ...this.getItemByCode(code),
            amountInCart: 1
          }
        ]
      })
    }
  }

  deleteCartItem(code) {
    this.setState({
      ...this.state,
      cartItems: this.state.cartItems.filter((item) => item.code !== code)
    })
  }
}

export default Store;
