import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                id:id,
                title: title,
                price: price,
                rating: rating,
                image: image
            }
        })

    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                  { Array(rating).fill().map((_,i) => (
                    <span aria-label="close" role="img">✨</span>
                  ))}  
                </div>
            </div>
            <img alt="alternative" src={image}/>
            <button onClick={addToBasket} className="product__button"> Add to basket</button>
        </div>
    )
}

export default Product
