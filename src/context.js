import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        storeProducts,
        detailProduct
    }
    handleDetail = () => {
        console.log('hello from detail')
    }
    addToCart = () => {
        console.log('hello from addToCArt')
    }
    
    render(){
        return(
          <Context.Provider value={{
              ...this.state,
              handleDetail:this.handleDetail,
              addToCart:this.addToCart
              }}>
              {this.props.children}
          </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer