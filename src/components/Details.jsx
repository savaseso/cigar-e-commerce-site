import React from 'react';
import { Consumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button'
const Details = () => {
        return (
            <Consumer>
                {value => {
                    const { id, company, img, info, price, title, inCart } = value.detailProduct
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                            {/* endtitle */}
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} alt="product" className="img-fluid" />
                                </div>
                                {/* product-text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>type: {title}</h2>
                                    <h5 className="text-title text-uppercase text-muted mt-3 mb-2">made by <span className="text-uppercase">{company}</span></h5>
                                    <h4 className="text-blue"><strong>price: <span>$</span>{price}</strong></h4>
                                    <p className="text-capitalized font-weight-bold mt-3">Some info about the product:</p>
                                    <p className="text-muted lead">{info}</p>
                                    {/* buttons */}
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>back to products</ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                            cart
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id)
                                            }}>
                                            {inCart ? "inCart" : "add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
export default Details