import React from 'react';
import Product from './Product'
import Title from './Title'
import { Consumer } from '../context'
const ProductList = (props) => {
        return(
            <Consumer>
                {value => {
                   return  <React.Fragment>
                    <div className='py-5'>
                        <div className='container'>
                            <Title name='our' title='products'/>
                            <div className='row'>
                                {value.products.map(product => <Product key={product.id} product={product} /> )}
                            </div>
                        </div>
                    </div>
                </React.Fragment>
                }}
            </Consumer>
        )
    }
export default ProductList