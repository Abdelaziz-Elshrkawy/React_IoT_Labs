import { Component, PropsWithChildren } from "react";
import { task3State } from "../types/taskThreeState";

export default class Login extends Component<PropsWithChildren, task3State> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  changeState = () => {
    this.setState({
      isLoggedIn: true,
    });
  };
  render() {
    return (
      <div id="task3">
        <hr />
        <h3>Task3</h3>
        <p>{!this.state.isLoggedIn ? "Gust" : "You now have a subscription"}</p>
        <p></p>
        <button onClick={this.changeState}>Login</button>
      </div>
    );
  }
}
