import { Component, PropsWithChildren, ReactNode } from "react";
import SignUp from "./signUp";
import './style.css'
import SingIn from "./signIn";
import { Task2Types } from "../../Types/Task2Types";
export default class Task2 extends Component<{},Task2Types> {
  constructor(props: PropsWithChildren) {
      super(props);
      this.state = {
        Clicked: false,
      };
    }
    updateState = (newState: boolean) => {
        this.setState({
            Clicked: newState
        })
    }
    render(): ReactNode {
    return (
      <div id="task2">
            {
            this.state.Clicked ? <SingIn/> : <SignUp updateState={this.updateState}/>
        }
      </div>
    );
  }
}