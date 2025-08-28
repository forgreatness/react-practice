import React from 'react';

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

export { Box }