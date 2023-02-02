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
  const rat = [1, 2, 3, 4, 5];
  return (
    <section>
      <div className="w-[180px] text-[15px] font-semibold">
        <img
          src={`../../images/${props.image}`}
          className="w-[180px] h-[210px] rounded-lg "
        />
        <p>{props.name}</p>

        <div className="flex gap-2 mb-[94px]">
          {/* <BsStarHalf
            color="orange"
            background="orange"
            border="1px"
            borderColor="red"
            borderStyle="solid"
          />

          {rat.map((item, i) => {
            return item <= Number(props.rating.toFixed()) ? (
              <BsStarFill color="orange" />
            ) : (
              <BsStar color="orange" />
            );
          })} */}
          {/* Number(props.rating.toFixed()) */}
          {rat.map((item, i) => {
            console.log(item);
            console.log(Math.abs(2.8 - item));
            return item <= Math.floor(props.rating) ? (
              <img src="../../images/star.png" className="h-[19px] w-[19px]" />
            ) : (Math.abs(props.rating - item) > 0.25) &
              (Math.abs(props.rating - item) < 0.76) ? (
              <img
                src="../../images/starHalf.png"
                className="h-[19px] w-[19px]"
              />
            ) : Math.abs(item - props.rating) < 0.25 ? (
              <img src="../../images/star.png" className="h-[19px] w-[19px]" />
            ) : (
              <img
                src="../../images/starEmpty.png"
                className="h-[19px] w-[19px]"
              />
            );
          })}

          <span>{props.rating}</span>
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
