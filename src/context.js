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
    getItem = (id) => this.state.products.find(item => item.id === id);

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState({detailProduct:product})
    }
    addToCart = (id) => {
        console.log(`add to cart${id}`)
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