import { useCart } from "../../context/CartContext";
import { Offcanvas, Stack } from "react-bootstrap";
import CartItem from "./cartItem";

const ShoppingCart = ({ isOpen }) => {
  const { closeCart, cartItems } = useCart();

  return (
    <div>
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
export default ShoppingCart;
