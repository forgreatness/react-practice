type SelectProps<T extends string | string [] = string> = {
    value: T;
    onChange: (newValue: T) => void;
}

type PositionValues = 'top' | 'bottom' | 'left' | 'right'


function Select<T extends string | string[]>({value, onChange}: SelectProps<T>) {

}

// const Select = <T extends string | string[]>({value, onChange}: SelectProps<T>) => {

// }

// const select = () => {

// }

// PRactice #1
import React from 'react';

interface Props {
    name: string;
    age: number;
    email?: string;
}

const Practice1Component: React.FC<Props> = ({ age, name, email = "danh1nguyen23@live.com" }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>I am about {age} years old</p>
        </div>
    )
}

export { Practice1Component }