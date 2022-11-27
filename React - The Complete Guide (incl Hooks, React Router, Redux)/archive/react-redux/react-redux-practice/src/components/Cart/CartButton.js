import classes from './CartButton.module.css';
import {useDispatch} from "react-redux";
import {showCartActions} from "../../store";

const CartButton = () => {
    const dispatch = useDispatch()

    const toggleCartHandler = () => {
        dispatch(showCartActions.toggleCart())
    }

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
