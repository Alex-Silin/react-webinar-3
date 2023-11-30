import React, {useCallback, useState} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import CartModal from "./components/cart-modal";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const list = store.getState().list;
  const cartItems = store.getState().cartItems;
  const totalPrice = store.getTotalPrice();
  const totalItemsCount = store.getTotalItemsCount();

  const callbacks = {
    onCartOpen: useCallback(() => {
      setIsCartOpen(true);
    }, []),

    onCartClose: useCallback(() => {
      setIsCartOpen(false);
    }, []),

    onAddCartItem: useCallback((code) => {
      store.addCartItem(code);
    }, [store]),

    onDeleteCartItem: useCallback((code) => {
      store.deleteCartItem(code);
    }, [store]),
  }

  return (
    <PageLayout>
      <Head title='Магазин'/>
      <Controls
        onCartOpen={callbacks.onCartOpen}
        totalPrice={totalPrice}
        totalItemsCount={totalItemsCount}
      />
      <List
        list={list}
        onAddCartItem={callbacks.onAddCartItem}
      />
      <CartModal
        open={isCartOpen}
        onClose={callbacks.onCartClose}
        totalPrice={totalPrice}
      >
        <List
          list={cartItems}
          deletionMode={true}
          onDeleteCartItem={callbacks.onDeleteCartItem}
        />
      </CartModal>
    </PageLayout>
  );
}

export default App;
