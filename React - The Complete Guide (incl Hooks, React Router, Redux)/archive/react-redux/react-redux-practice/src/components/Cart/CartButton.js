import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../store";

const CartButton = () => {
    const dispatch = useDispatch()
    const quantity = useSelector(state => state.cart.totalQuantity)

    const toggleCartHandler = () => {
        dispatch(cartActions.toggleCart())
    }

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
