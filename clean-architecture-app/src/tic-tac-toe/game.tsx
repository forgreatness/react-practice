import React from 'react'; 

interface GameProps {

}

interface GameState {
    count: Number;
}

// create a class name Game which represent this component and if we want the class to include
// state and be converted in REACT DOM then we have to extends React 
class Game extends React.Component<GameProps, GameState> {
    
}

export default Game;




// BELOW SHOW EXAMPLE OF DECLARING OWN TYPE IN TYPESCRIPT
/*
type Forehand<T> {
    technique: T;
    fault: string;
};
*/