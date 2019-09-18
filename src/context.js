import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        products:[],
        detailProduct,
        cart:[],
        modalOpen:true,
        modalProduct:detailProduct
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
    
    render(){

        return(
          <Context.Provider value={{
              ...this.state,
              handleDetail:this.handleDetail,
              addToCart:this.addToCart,
              modalOpen:this.openModal,
              closeModal:this.closeModal
              }}>
              {this.props.children}
          </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer