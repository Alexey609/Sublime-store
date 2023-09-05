import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/slices/userSlice';

export const Product = (item) => {
  const dispatch = useDispatch();
  const { price, title, images, description } = item;

  const [currentImage, setCurrentImage] = useState();

  useEffect(() => {
    if (!images.length) return;

    setCurrentImage(images[0]);
  }, [images]);

  const addToCart = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <div className="product_details">
      <div className="container">
        <div className="row details_row">
          <div className="col-lg-6">
            <div className="details_image">
              <div className="details_image_large">
                <img src={currentImage} alt="" />
              </div>
              <div className="details_image_thumbnails d-flex flex-row align-items-start justify-content-between">
                {images.map((image, i) => (
                  <div key={i} className="details_image_thumbnail active">
                    <img
                      src={image}
                      alt=""
                      onClick={() => setCurrentImage(image)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="details_content">
              <div className="details_name">{title}</div>
              <div className="details_discount">${Math.floor(price / 0.4)}</div>
              <div className="details_price">${price}</div>

              <div className="in_stock_container">
                <div className="availability">Availability:</div>
                <span>In Stock</span>
              </div>
              <div className="details_text">
                <p>{description}</p>
              </div>

              <div className="product_quantity_container">
                <div className="cart_button">
                  <button className="product__button" onClick={addToCart}>
                    Add to cart
                  </button>
                </div>
              </div>

              <div className="details_share">
                <span>Share:</span>
                <ul>
                  <li>
                    <Link to="/">
                      <i className="fa fa-pinterest" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="'">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row description_row">
          <div className="col">
            <div className="description_title_container">
              <div className="description_title">Description</div>
              {/*<div className="reviews_title">*/}
              {/*  <a href="#">*/}
              {/*    Reviews <span>(1)</span>*/}
              {/*  </a>*/}
              {/*</div>*/}
            </div>
            <div className="description_text">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
