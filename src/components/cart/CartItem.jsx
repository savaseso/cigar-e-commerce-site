import React from 'react'
const CartItem = ({value,item}) => {
    const {id,title,img,price,total,count} = item;
    const {increment,decrement, remove} = value;
    console.log(value)
    return(
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width:'5rem',height:'5rem'}} alt="product" className='img-fluid'/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">{title}</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">{price}</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <button onClick={()=>increment(id)}>+</button>
                <button onClick={()=>decrement(id)}>-</button>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <button>Remove</button>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">total</p>
            </div>
        </div>
    )
}
export default CartItem