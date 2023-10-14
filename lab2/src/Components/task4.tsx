import { Component, PropsWithChildren } from "react";
import { task4State } from "../types/taskFourState";

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

  increment = (event?: string) => {
    const nextValue =
      event === "increment"
        ? this.state.counter + 1
        : this.state.counter <= 1
        ? 1
        : this.state.counter - 1;
    this.setState({
      counter: nextValue,
    });
  };

  render() {
    return (
      <div id="task">
        <hr/>
        <h3>Task4</h3>
        <button
          onClick={() => {
            this.increment();
          }}
          className="increment"
        >
          -
        </button>
        <span>{this.state.counter}</span>
        <button
          onClick={() => {
            this.increment("increment");
          }}
          className="increment"
        >
          +
        </button>
      </div>
    );
  }
}
