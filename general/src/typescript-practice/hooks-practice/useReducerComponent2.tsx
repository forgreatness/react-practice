import React, { useReducer } from 'react'

function LightSwitchReducer(state, action) {
    if (action.type === 'switch_on') {
        return {
            isOn: !state.isOne
        };
    }

    throw Error("Unknown action.");
}

function LightSwitch() {
    const [state, dispatch] = useReducer(LightSwitchReducer, { isOn: true });

    const switchStyles = {
        
    }
            
    return(
        <div style={}>
            <button onClick={() => {
                dispatch({ type: 'switch_off' })
            }}>Turn Off</button>

            <button onClick={() => {
                dispatch({ type: 'switch_on' })
            }}>Turn ON</button>
            <div>
                this is my lights
            </div>
        </div>
    )
}
