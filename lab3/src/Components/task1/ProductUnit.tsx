import { Component, ReactNode } from "react";
import { taskOneProps } from "../../Types/taskOneProps";
import Increment from "../task4 lab2/task4";

export default class ProductUnit extends Component<taskOneProps> {
  render(): ReactNode {
    return (
      <>
        <div id="img-parent">
          <div className="img-div">
            <img src={this.props.src} alt={this.props.name} />
          </div>
        </div>
        <div className="name-div">
          <p>{this.props.name}</p>
        </div>
        <div className="category">{this.props.category}</div>
        <div className="price-div">
          <p>{this.props.price} $</p>
        </div>
        <div className="counter">
          <Increment />
        </div>
        <div className="description">{this.props.description}</div>
      </>
    );
  }
}
