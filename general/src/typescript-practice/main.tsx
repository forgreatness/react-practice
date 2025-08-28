// interface AppState {
//     count: number;
//     message: string;
// };

// class Counter extends React.Component<{}, AppState> {
//     constructor(props: {}) {
//         super(props);
//         this.state = {
//             count: 0,
//             message: "hello type learner"
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <p>{this.state.message}</p>
//                 <p>{this.state.count}</p>
//             </div>
//         );
//     }
// }

import React from 'react';

type User = {
    id: string;
    email: string;
    name: string;
};

interface AppState {
    users: User[];
    selectedUser: User | null;
}


export default class TypescriptPractice extends React.Component<{}, AppState> {
    constructor(props: {}) {
        // Whenever we extend a class, to get the functionalities and attirubtes from it we must call superconstructor first
        super(props);

        let user1 : User = {
            email: "danh1nguyen23@live.com",
            id: "usir389817",
            name: "Danh Nguyen"
        }

        this.state = {
            users: [user1],
            selectedUser: user1,
        }
    }

    render () {
        return (
            <div>
                <ul>
                    {this.state.users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
                <p>Selected Users: {this.state.selectedUser?.name ?? "NONE"}</p>
            </div>
        );
    }
}


// Recap for 08/25/2025
/*
    We started out with class typed stateful component and utilized the React.Component to initialize a typescript object as a React Component

    lets assume we have a class call stocks
    class Stock extends React.Component<{}, AppState> {
        super(props) // convert the class Stock into React Component

        let marketDetails = {
            captialization: 4.5T,
            year_started: 1958
        }

        this.state = {
            stock_market_details: marketDetails
        }
    }
*/