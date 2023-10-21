import { Component, PropsWithChildren } from "react";
import { Provider, value } from "./Context";
import Comp2 from "./comp2";

export default class Comp1 extends Component<PropsWithChildren, value>{

    render() {
        return (
            <Provider value='Hello'>
                <Comp2/>
            </Provider>
        )
    }
}
