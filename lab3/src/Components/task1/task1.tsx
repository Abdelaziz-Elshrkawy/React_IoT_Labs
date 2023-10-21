import { Component, ReactNode } from "react";
import { products } from "../../ProductData";
import ProductUnit from "./ProductUnit";
import "./task1.css";

export default class Products extends Component {
  render(): ReactNode {
    return (
      <div id="task1">
        {products.map((e) => (
          <div key={e.id} className="product-div">
            <ProductUnit
              name={e.name}
              src={e.img}
              price={e.price}
              description={e.description}
              category={e.category}
            />
          </div>
        ))}
      </div>
    );
  }
}
