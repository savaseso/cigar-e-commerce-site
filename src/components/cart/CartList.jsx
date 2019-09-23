import React from 'react';
import CartItem from './CartItem';
const CartList = ({ value }) => {
    const { cart } = value
    return (
        <div className="container-fluid">
            {cart.map(item => <CartItem key={item.id} value={value} item={item} />)}
        </div>
        )

}
export default CartList