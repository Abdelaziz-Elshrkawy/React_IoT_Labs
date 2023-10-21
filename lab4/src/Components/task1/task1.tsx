import { Component, ReactNode } from "react";
import { productsList } from "../../ProductData";
import ProductUnit from "./ProductUnit";
import "./task1.css";

export default function products(): JSX.Element {

    return (
      <div id="task1">
        {productsList.map((e) => (
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
