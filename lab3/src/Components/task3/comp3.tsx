import { Component, PropsWithChildren, ReactNode } from "react";
import Comp4 from "./comp4";

export default class Comp3 extends Component<PropsWithChildren, {}> {
  render(): ReactNode {
    return (
      <div>
        <Comp4 />
      </div>
    );
  }
}
