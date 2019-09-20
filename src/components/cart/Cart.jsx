import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { Consumer } from '../../context'

class Cart extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    return <section>
                        <Title name="Your" title="cart" />
                        {value.cart.length === 0? <EmptyCart /> :<CartColumns />}
                    </section>
                }}</Consumer>
        )
    }
}
export default Cart