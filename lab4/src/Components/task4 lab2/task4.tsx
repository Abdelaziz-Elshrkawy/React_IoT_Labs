import { Component, PropsWithChildren, ReactNode } from "react";
import { task4State } from "../../Types/taskFourLab2State";

export default class Increment extends Component<
  PropsWithChildren,
  task4State
> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = {
      counter: 1,
    };
  }

  increaseValue = (): void => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  decreaseValue = (): void => {
    const nextValue =
      this.state.counter <= 1 ? this.state.counter : this.state.counter - 1;
    this.setState({
      counter: nextValue,
    });
  };

  render(): ReactNode {
    return (
      <div id="task">
        <div>
          <button
            onClick={() => {
              this.decreaseValue();
            }}
            className="increment"
          >
            -
          </button>
          <span>{this.state.counter}</span>
          <button
            onClick={() => {
              this.increaseValue();
            }}
            className="increment"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
