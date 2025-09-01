import React, { JSX } from 'react';

interface BoxProps<T> {
    content: T
}

class Box<T> extends React.Component<BoxProps<T>> {
    render() {
        return (
            <div>
                <p>Content: {this.props.content}</p>
            </div>
        );
    }
}

function BoxDecFuncComponent<T>(props: BoxProps<T>): JSX.Element {
    return (
        <div>
            <p>Content: {props.content}</p>
        </div>
    );
}

const BoxAssignmentFuncComponent = <T,>(props: BoxProps<T>): JSX.Element => {
    return (
        <div>
            <p>Content: {props.content}</p>
        </div>
    );
}

// const BoxAssignedFuncComponent = <T,>(props: { content: T }) => {
//     return (
//         <div>
//             <p>Content: {props.content} </p>
//         </div>
//     );
// }

export { Box, BoxDecFuncComponent, BoxAssignmentFuncComponent }