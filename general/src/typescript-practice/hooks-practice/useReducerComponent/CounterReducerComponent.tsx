import React, { useReducer, type EventHandler, type JSX } from 'react';

// TYPESCRIPT types includes: [number, boolean, bigint, symbol, null, undefined, string]
interface CounterState {
    count: number;
}

interface CounterAction {
    // type?: "someaction"; //this makes it default to a value if needed
    type: string;
    payload?: any;
}

const counterReducer = (prevState: CounterState, action: CounterAction): CounterState => {
    let newCounterState: CounterState = {
        count: prevState.count
    };

    switch (action.type) {
        case "increment": 
            newCounterState.count = prevState.count + 1;
            break;
        default:
            // Code to execute if no case matches the expression
            break;
    };

    return newCounterState;
}

function CounterReducerComponent() : JSX.Element {
    // useReducer output: currentState, counterdispatcher
    // userREducer input: initialState, counterReducer
    const [counterState, counterDispatcher] = useReducer(counterReducer, { count: 1 });

    // const handleCounterClickEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();

    //     let handleCounterCLickAction: CounterAction = {
    //         type: "increment"
    //     };

    //     counterDispatcher(handleCounterCLickAction);
    // }

    const handleCounterClickEvent = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();

        const target = e.target as HTMLElement;

        if (target.tagName == 'BUTTON') {
            let counterClickEventAction: CounterAction = {
                type: ""
            };

            switch (target.id) {
                case "increment-counter-button": {
                    counterClickEventAction.type = "increment";
                    break;
                }
                case "decrement-counter-button": {
                    counterClickEventAction.type = "decrement";
                    break;
                }
                default: {
                    return;
                }
            }

            counterDispatcher(counterClickEventAction);
        }
    }

    return (
        <div onClick={handleCounterClickEvent}>
            <p>Counter @ {counterState?.count ?? 0}</p>
            <button id='increment-counter-button'>HIT ME</button>
            <button id='decrement-counter-button'>HURT ME</button>
        </div>
    );
}

export { CounterReducerComponent }




// class CounterReducerComponent extends React.Component<{}, CounterState> {
//     constructor(props = {}) {
//         super(props);
//     }

//     handleCounterClick = () => {

//     }

//     render() : JSX.Element {
//         return (
//             <div>
//                 <button onClick={this.handleCounterClick}>{this.state.count}</button>
//             </div>
//         );
//     }
// }