import {context} from './conetxt'
import Two from './two';

export default function One() {

    return (
        <context.Provider value="Hello From one">
            <p>One</p>
            <Two/>
        </context.Provider>
    );
}
