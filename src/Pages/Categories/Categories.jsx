import React from 'react';
import { Product } from '../../Components/Product/Product';

export const Categories = () => {
  return (
    <div className="products">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="sorting_bar d-flex flex-md-row flex-column align-items-md-center justify-content-md-between">
              <div className="results">
                Showing <span>12</span> results
              </div>
              <div className="sorting_container ml-md-auto">
                <div className="sorting">
                  <ul className="item_sorting">
                    <li>
                      <span className="sorting_text">Sort by</span>
                      <i className="fa fa-chevron-down" aria-hidden="true"></i>
                      <ul>
                        <li
                          className="product_sorting_btn"
                          data-isotope-option='{ "sortBy": "original-order" }'
                        >
                          <span>Default</span>
                        </li>
                        <li
                          className="product_sorting_btn"
                          data-isotope-option='{ "sortBy": "price" }'
                        >
                          <span>Price</span>
                        </li>
                        <li
                          className="product_sorting_btn"
                          data-isotope-option='{ "sortBy": "stars" }'
                        >
                          <span>Name</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="product_grid">
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
