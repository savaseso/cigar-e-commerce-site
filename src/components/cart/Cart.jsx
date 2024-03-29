import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { Consumer } from '../../context'
import CartList from './CartList';
import CartTotals from './CartTotals'


const Cart = (props) => {
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
                                    <CartTotals  value={value} history={props.history}/>
                                </React.Fragment>)
                        } else {
                            setTimeout(() => props.history.push('/'), 2300)
                            return <EmptyCart />
                        }
                    }}
                </Consumer>
            </section>
        )
    }

export default Cart