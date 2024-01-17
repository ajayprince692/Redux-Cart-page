import React, { useState, useContext } from 'react';
import { UserContext } from '../utils/UserContextComponent';

function CartCard() {
  const { product, setProduct } = useContext(UserContext);

  const showAlert = () => {
    alert('Proceeding to payment. Your items will be processed.');
  
  };

  return (
    <div className="container">
      <div className="row">
        {product.map((e, i) => {
          const discountPrice = Math.round((e.price * e.discountPercentage) / 100);
          const [quantity, setQuantity] = useState(1);

          const addQuantity = () => {
            setQuantity(quantity + 1);
          };

          const removeQuantity = () => {
            setQuantity(quantity - 1);
          };

          return (
            <div key={i} className="col-lg-6 mb-4">
              <div className="card">
                <img src={e.image} className="card-img-top" alt="Product" />
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text">{e.description}</p>
                  <p className="card-text">Brand: {e.brand}</p>
                  <p className="card-text">Price: ${e.price}</p>
                  <p className="card-text">Discount: {e.discountPercentage}%</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={removeQuantity}
                        disabled={quantity === 1}
                      >
                        -
                      </button>
                      <span className="mx-2">{quantity}</span>
                      <button
                        type="button"
                        className="btn btn-outline-success"
                        onClick={addQuantity}
                      >
                        +
                      </button>
                    </div>
                    <p className="card-text text-success">
                      Total: ${e.price * quantity - discountPrice}
                    </p>
                  </div>
                  <button type="button" className="btn btn-primary" onClick={showAlert}>
                    Proceed to Pay
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartCard;
