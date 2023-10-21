import { Component } from "react";

export default class SingIn extends Component{
    render() {
        return (
          <div id="sign-in-div">
            <p>Sing In</p>
            <div id="form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button>Login</button>
            </div>
          </div>
        );
    }
}