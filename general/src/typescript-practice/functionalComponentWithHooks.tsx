import React, { useState } from 'react';

interface CounterState {
    count: number;
}

// number, bigint, boolean, string, undfined, null, symbol
export const CountComponent: React.FC = () => {
    const [state, setState] = useState<CounterState>({ count: 0 });

    const handleCounterIncrement = () => {
        setState((prev) => ({
            count: prev.count + 1
        }));
    };

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={handleCounterIncrement}>Increment</button>
        </div>
    )
}

export class CounterClassComponent extends React.Component<{}, CounterState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            count: 0
        };
    }

    // Arrow function inherit this from surrounding context, this becomes the parent of the method always
    handleCounterIncrement = (e) => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            <div>
                <p>Counter: {this.state.count}</p>
                <button onClick={this.handleCounterIncrement}>Increment</button>
            </div>
        )
    }
}

// export default CountComponent;

// Lets write the same for class component

// class CountClassComponent: React.Component<{}, CounterState> {
//     constructor(props: {}) {
//         super(props);

//         this.state = {
//             count: 0
//         };
//     }
// }
