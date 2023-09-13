import { createContext, useContext, useState, ReactNode } from "react";

import { useLocalStroage } from "../hooks/useLocalStorage";
import { CartData, IProductRequest } from "../types";

type CartProviderProps = {
  children: ReactNode;
};

type CartContext = {
  getItemQty: (id: number) => number;
  addItem: (id: number, product: IProductRequest) => void;
  decreaseItem: (id: number) => void;
  removeItem: (id: number) => void;
  cartQty: number;
  cartItems: CartData[];
  cartQtyItems: number;
  totalCount: number;
  totalDiscount: number;
};

const CartContext = createContext({} as CartContext);

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useLocalStroage<CartData[]>("cart", []);

  const cartQty = cartItems.reduce((count, item) => item.count + count, 0);
  const cartQtyItems = cartItems.length;

  const totalCount = cartItems.reduce((total, currentItem) => {
    return (
      total + (currentItem.data.price.final_price || 0) * currentItem.count
    );
  }, 0);
  const totalDiscount = cartItems.reduce((total, currentItem) => {
    return (
      total +
      (Number(currentItem.data.price.production_price) || 0) * currentItem.count
    );
  }, 0);

  function getItemQty(id: number) {
    return cartItems.find((item) => item.data.id === id)?.count || 0;
  }

  function addItem(id: number, product: IProductRequest) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.data.id === id) == null) {
        return [...currItems, { data: product, count: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.data.id === id) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseItem(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.data.id === id)?.count == 1) {
        return currItems.filter((item) => item.data.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.data.id === id) {
            return { ...item, count: item.count - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeItem(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.data.id !== id);
    });
  }

  return (
    <CartContext.Provider
      value={{
        getItemQty,
        addItem,
        decreaseItem,
        removeItem,
        cartQty,
        cartItems,
        cartQtyItems,
        totalCount,
        totalDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
