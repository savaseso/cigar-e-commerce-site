import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        products:[],
        detailProduct,
        cart:[],
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubtotal:0,
        cartTax:0,
        cartTotal:0
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
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart =  true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState({products:tempProducts,cart:[...this.state.cart,product]},()=>console.log(this.state))
    }
    openModal = id => {
        const product = this.getItem(id);
        this.setState({modalProduct:product,modalOpen:true})
    }
    closeModal = () => {
        this.setState({modalOpen:false})
    }
    increment = (id) => {
        console.log('increment method')
    }
    decrement = (id) => {
        console.log('decrement method')
    }
    removeItem = (id) => {
        console.log('remove method')
    }
    clearCart = () => {
        console.log('clear method')
    }
    
    render(){
        return(
          <Context.Provider value={{
              ...this.state,
              handleDetail:this.handleDetail,
              addToCart:this.addToCart,
              openModal:this.openModal,
              closeModal:this.closeModal,
              increment:this.increment,
              decrement:this.decrement,
              removeItem:this.removeItem,
              clearCart:this.clearCart
              }}>
              {this.props.children}
          </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer