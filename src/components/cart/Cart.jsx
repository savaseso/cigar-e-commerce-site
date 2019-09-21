import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { Consumer } from '../../context'
import CartList from './CartList';

class Cart extends Component {
    render() {
        return (
            <section>
                <Consumer>
                    {value => {
                        const { cart } = value
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="Your" title="cart" />
                                    <CartColumns />
                                    <CartList value={value}/>
                                </React.Fragment>)
                        } else {
                            return <EmptyCart />
                        }
                    }}
                </Consumer>
            </section>
        )
    }
}
export default Cart