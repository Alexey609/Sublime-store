import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
  clearCart,
} from '../../redux/slices/userSlice';
import './Cart.css';
import close from '../../assets/svg/close.svg';
import { sumBy } from '../../utils/common';

export const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(({ user }) => user);

  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({ ...item, quantity }));
  };

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart_info">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="cart_info_columns clearfix">
              <div className="cart_info_col cart_info_col_product">Product</div>
              <div className="cart_info_col cart_info_col_price">Price</div>
              <div className="cart_info_col cart_info_col_quantity">
                Quantity
              </div>
              <div className="cart_info_col cart_info_col_total">Total</div>
            </div>
          </div>
        </div>

        {!cart.length ? (
          <div>Cart is empty</div>
        ) : (
          <div className="row cart_items_row">
            <div className="col">
              {cart.map((item) => {
                const { title, category, images, price, id, quantity } = item;

                return (
                  <div
                    key={id}
                    className="cart_item d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start"
                  >
                    <div className="cart_item_product d-flex flex-row align-items-center justify-content-start">
                      <div className="cart_item_image">
                        <div>
                          <img src={images[0]} alt="" />
                        </div>
                      </div>
                      <div className="cart_item_name_container">
                        <div className="cart_item_name">
                          <h3>{title}</h3>
                        </div>
                        <div className="cart_item_edit">
                          <h4>{category.name}</h4>
                        </div>
                      </div>
                    </div>

                    <div className="cart_item_price">${price}</div>

                    <div className="cart_item_quantity">
                      <div className="product_quantity_container">
                        <div className="product_quantity clearfix">
                          <span>Qty</span>
                          <input
                            id="quantity_input"
                            type="text"
                            pattern="[0-9]*"
                            value={quantity}
                          />
                          <div className="quantity_buttons">
                            <div
                              id="quantity_inc_button"
                              className="quantity_inc quantity_control"
                              onClick={() =>
                                changeQuantity(item, Math.max(1, quantity + 1))
                              }
                            >
                              <i
                                className="fa fa-chevron-up"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <div
                              id="quantity_dec_button"
                              className="quantity_dec quantity_control"
                              onClick={() =>
                                changeQuantity(item, Math.max(1, quantity - 1))
                              }
                            >
                              <i
                                className="fa fa-chevron-down"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="close__button"
                      onClick={() => removeItem(item.id)}
                    >
                      <img src={close} alt="close" />
                    </div>
                    <div className="cart_item_total">${price * quantity}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="row row_cart_buttons">
          <div className="col">
            <div className="cart_buttons d-flex flex-lg-row flex-column align-items-start justify-content-start">
              <div className="cart_buttons_right ml-lg-auto">
                <button className="button__clear" onClick={handleClear}>
                  Clear cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row row_extra">
          <div className="col-lg-6 offset-lg-2">
            <div className="cart_total">
              <div className="section_title">Cart total</div>
              <div className="section_subtitle">Final info</div>
              <div className="cart_total_container">
                <ul>
                  <li className="d-flex flex-row align-items-center justify-content-around">
                    <div className="cart_total_title">Total:</div>
                    <div className="cart_total_value ml-auto">
                      $
                      {sumBy(
                        cart.map(({ quantity, price }) => quantity * price)
                      )}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="button checkout_button">
                <Link to="/">Proceed to checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
