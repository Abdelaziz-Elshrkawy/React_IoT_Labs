import { Component, PropsWithChildren, ReactNode } from "react";
import { Consumer } from "./Context";
interface value {
  state: string | number;
}
export default class Comp5 extends Component<PropsWithChildren, value> {
  render(): ReactNode {
    return (
      <Consumer>
        {(state) => {
          return <div id="comp-5">{state as string}</div>;
        }}
      </Consumer>
    );
  }
}
