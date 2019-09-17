import React, { Component } from 'react';
import Product from './Product'
import {storeProducts} from '../data'
class ProductList extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        {storeProducts.map(product => <Product product={product} /> )}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ProductList