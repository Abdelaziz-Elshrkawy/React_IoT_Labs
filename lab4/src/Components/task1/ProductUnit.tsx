import { Component, PropsWithChildren, ReactNode } from "react";
import { taskOneProps } from "../../Types/taskOneProps";
import Increment from "../task4 lab2/task4";
type product = {
  name?: string;
  src?: string;
  price?: number | string;
  category?: string;
  description?: string;
};
export default function ProductUnit({
  category,
  description,
  name,
  price,
  src,
}: product): JSX.Element {
  return (
    <>
      <div id="img-parent">
        <div className="img-div">
          <img src={src} alt={name} />
        </div>
      </div>
      <div className="name-div">
        <p>{name}</p>
      </div>
      <div className="category">{category}</div>
      <div className="price-div">
        <p>{price} $</p>
      </div>
      <div className="counter">
        <Increment />
      </div>
      <div className="description">{description}</div>
    </>
  );
}
