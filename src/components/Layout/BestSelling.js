import React, { useContext } from "react";
import { Button } from "antd";
import { useCart } from "../../context/CartContext";

function BestSelling(props) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCart();
  const quantity = getItemQuantity(props.id);
  return (
    <section>
      <div>
        <img
          src={`../../images/${props.image}`}
          className="w-[164px] h-[204px] rounded-lg "
        />
        <p>{props.name}</p>
        <div className="flex gap-2 mb-[94px]">
          <img src="../../images/star.png" className="h-[19px] w-[19px]" />
          <img src="../../images/starEmpty.png" className="h-[19px] w-[19px]" />
          <span>4.0</span>
        </div>
      </div>

      <div className="mt-auto">
        {quantity === 0 ? (
          <Button onClick={() => increaseCartQuantity(props.id)}>
            + Add to Cart
          </Button>
        ) : (
          <div className="flex items-center flex-col gap-[0.5rem]">
            <div
              className="flex items-center justify-center
            gap-[0.5rem]"
            >
              <Button onClick={() => decreaseCartQuantity(props.id)}>-</Button>
              <div>
                <span className="">{quantity} </span>
                in cart
              </div>
              <Button onClick={() => increaseCartQuantity(props.id)}>+</Button>
            </div>
            <Button
              className="text-sm"
              onClick={() => removeFromCart(props.id)}
            >
              Remove
            </Button>
          </div>
        )}{" "}
      </div>
    </section>
  );
}

export default BestSelling;
