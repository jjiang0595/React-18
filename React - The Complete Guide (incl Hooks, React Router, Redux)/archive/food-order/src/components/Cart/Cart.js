import {useContext, useState} from 'react';
import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from '../../store/cart-context'
import Checkout from "./Checkout";


const Cart = props => {
    const [checkout, setCheckout] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1})
    }

    const orderHandler = () => {
        setCheckout(true)
    }

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true)
        const response = await fetch('https://react-http-1870f-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        })
        setIsSubmitting(false)
        setSubmitted(true)
        cartCtx.clearCart()
    }
    
    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    )

    const modalActions = (<div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
    </div>)

    const cartModalContent = <>{cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        {checkout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
        {!checkout && modalActions}</>

    const isSubmittingModalContent = <p>Sending order data...</p>
    const submittedModalContent = <>
        <p>Successfully sent your order!</p>
        <div className={classes.actions}>
            <button className={classes.button} onClick={props.onClose}>Close</button>
        </div>
    </>

    return <Modal onClose={props.onClose}>
        {!isSubmitting && !submitted && cartModalContent}
        {isSubmitting && isSubmittingModalContent}
        {!isSubmitting && submitted && submittedModalContent}
    </Modal>
}

export default Cart