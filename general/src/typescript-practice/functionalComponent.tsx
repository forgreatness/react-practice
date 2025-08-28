/*
    PART #3: Typed Safe react useState hooks in fucntional components
*/

import React, { type JSX } from 'react';
import '../styles/typescript-practice.scss';
import '../styles/main.css';

// interface Greetings {
//     gesture: string,
//     isBowing: boolean,
// };

// function Greet({gesture, isBowing}: Greetings) {
//     const componentStyles = {
//         width: '50vw',
//         height: '50vh',
//         margin: 'auto',
//         backgroundColor: 'lightblue',
//     };

//     const circlesStyle = isBowing ? { borderRadius: '50%' } : { };

//     const styles = {
//         ...componentStyles,
//         ...circlesStyle
//     };

//     return (
//         <div style={styles}>
//         </div>
//     )
// }

// function App(): React.FC {
//     return (
//         <Greet gesture='standing with authority' isBowing={false} />
//     )
// }

// export default App;


/*
THIS component is called functionaLComponentWithTypeScript we will rewrite it below
*/

// import React from 'react'

// In this step we create an interface instead of type because we are working with Object which may have multiple properties
// The primitive type in react includes number, string, boolean, null, undefined, symbol, bigint
interface Impression {
    gesture: string;
    isBowing: boolean;
    language?: string;
}

// Step #2: I need to use the Invitation interface in the state

function Welcome(props: Impression): JSX.Element {
    const styles = {
        width: '50vw',
        height: '50vh',
        margin: 'auto',
        backgroundColor: 'orange',
        borderRadius: props?.isBowing ? '50%' : '0%'
    };
    
    // return (
    //     <div style={styles}>

    //     </div>
    // );

    return (
        <div className={`container ${props.isBowing ? 'circle' : ''}`}>
            Welcome!
        </div>
    );
}

export default function TypescriptFunctionalComponent(): JSX.Element {
    return (
        <Welcome language="vietnamese" isBowing={true} gesture='Standing nice and tall with proud presence' />
    );
}


// Right away elements can be style in 2 ways: modular | external stylesheet or they can be styled inline
// External stylesheet are general and target more than 1 module
// modular style should come as highest priority, then inline style,
/*
    ORDER of STYLE SPECIFICITY
    #1. inline
    #2. styled-component | emotion
    #3. 
*/

/*
    THESE are all methods of styling
    - inline style
    - css module by component based using import styles from home.module.css 
    #3 css in JS librarys (style components)
        (e.g)
        import styled from 'styled-components'

        const BlueBox = styled.dev<{ isBowing: boolean }>`
            border-radius: isBowing ? '50%' : '0%';
            background-color: blue
            width: 50%;
            height: 50%;
        `;

        return (
            <Box isBowing={props.isBowing}>
        );
*/