import React, { Component } from 'react';
import Product from './Product'
import Title from './Title'
import { Consumer } from '../context'
class ProductList extends Component {
    render(){
        return(
            <Consumer>
                {value => {
                   return  <React.Fragment>
                    <div className='py-5'>
                        <div className='container'>
                            <Title name='our' title='products'/>
                            <div className='row'>
                                {value.storeProducts.map(product => <Product key={product.id} product={product} /> )}
                            </div>
                        </div>
                    </div>
                </React.Fragment>
                }}
            </Consumer>
        )
    }
}
export default ProductList