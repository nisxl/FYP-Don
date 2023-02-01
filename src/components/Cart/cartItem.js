import React from "react";
import { Stack } from "react-bootstrap";
import { useCart } from "../../context/CartContext";

import storeItems from "../../data/items.json";

function CartItem({ id, quantity }) {
  const { removeFromCart } = useCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="flex justify-center items-center"
    >
      <img
        src={`../../images/${item.image}`}
        className="w-[125px] h-[75px] object-cover"
      />
    </Stack>
  );
}

export default CartItem;
