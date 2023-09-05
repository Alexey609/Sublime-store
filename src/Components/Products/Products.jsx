import React from 'react';
import { Link } from 'react-router-dom';

export const Products = ({ amount, products = [] }) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <div className="products">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="product_grid">
              {list.map(({ id, images, title, price }) => (
                <Link to={`/products/${id}`} key={id}>
                  <div className="product">
                    <div className="product_image">
                      <img src={images[0]} alt="" />
                    </div>
                    <div className="product_content">
                      <div className="product_title">
                        <Link to="/">{title}</Link>
                      </div>
                      <div className="product_price">${price}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
