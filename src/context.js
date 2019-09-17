import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        products:[],
        detailProduct
    }
    componentDidMount(){
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
           tempProducts = [...tempProducts, singleItem];
        })
        this.setState({products:tempProducts})
    }
    handleDetail = (id) => {
        console.log('hello from detail',id)
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