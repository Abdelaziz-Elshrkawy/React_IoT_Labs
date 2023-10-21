import { Component, PropsWithChildren, ReactNode } from "react";
import Comp3 from "./comp3";

export default class Comp2 extends Component<PropsWithChildren, {}> {
  render(): ReactNode {
    return (
      <div>
        <Comp3 />
      </div>
    );
  }
}