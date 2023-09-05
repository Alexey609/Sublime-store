import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Categories = () => {
  const { categories } = useSelector((state) => state);
  const list = categories.list.filter((_, i) => i < 4);

  return (
    <div className="products">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="product_grid">
              {list.map(({ id, image, name }) => (
                <Link to={`/categories/${id}`} key={id}>
                  <div className="product">
                    <div className="product_image">
                      <img src={image} alt="" />
                    </div>
                    <div className="product_content">
                      <div className="product_title">
                        <h4>{name}</h4>
                      </div>
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
