import React, { useState } from 'react';

interface CounterState {
    count: number
};

const CounterFuncComponent: React.FC = () => {
    let [counterState, setCounterState] = useState<CounterState>({ 
        count: 0
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


export { CounterFuncComponent, CounterClassComponent }