'use client'
import { ReactNode, createContext, useContext, useState } from 'react'

type CartItem = {
  productId: string
  quantity: number
}

type CartContextType = {
  items: CartItem[]
  addToCart: (productId: string) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(productId: string) {
    setCartItems((state) => {
      const productInCartIdx = state.findIndex(
        (item) => item.productId === productId,
      )

      if (productInCartIdx < 0) {
        return [...state, { productId, quantity: 1 }]
      }

      const newState = [...state]
      newState[productInCartIdx].quantity += 1

      return newState
    })
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
