'use client'

import { useCart } from '@/contexts/cart-context'

type AddToCartButtonProps = {
  productId: number
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart()
  return (
    <button
      onClick={() => addToCart(productId)}
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
