import { Component, PropsWithChildren, ReactNode } from "react";
import Comp5 from "./comp5";
import { value } from "./Context";

export default class Comp4 extends Component<PropsWithChildren, value> {
  render(): ReactNode {
    return (
      <div>
        <Comp5 />
      </div>
    );
  }
}
