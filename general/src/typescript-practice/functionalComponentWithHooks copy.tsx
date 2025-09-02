import React, { useState, type JSX } from 'react';

interface CounterState {
    count: number
};

interface CounterFuncProps {
    initialValue: number;
}


// THis functional component is written using assigned function syntax with props and state
const CounterFuncComponent: React.FC<CounterFuncProps> = ({ initialValue }) => {
        let [counterState, setCounterState] = useState<CounterState>({ 
        count: initialValue
    });

    const handleIncrement = (e) => {
        console.log('please show the event ', e);

        setCounterState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    return (
        <div>
            <p>Counter @ {counterState.count}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
}

// This functional component  is written using declarative syntax
function CounterDeclartiveFuncComponent({ initialValue }: CounterFuncProps): JSX.Element {
    let [counterState, setCounterState] = useState<CounterState>({ 
        count: initialValue
    });

    const handleIncrement = (e) => {
        console.log('please show the event ', e);

        setCounterState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    return (
        <div>
            <p>Counter @ {counterState.count}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

// this functional component is written using class syntax
class CounterClassComponent extends React.Component<{}, CounterState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            count: 0
        };
    }

    handleIncrement = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            <div>
                <p>Counter @ {this.state.count}</p>
                <button onClick={this.handleIncrement}></button>
            </div>
        )
    }
}


export { CounterFuncComponent, CounterClassComponent, CounterDeclartiveFuncComponent }