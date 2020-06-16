import React from 'react';

export interface Props {
    person: string,
    age: number;
}

function Greeting({person, age}: Props) {
    return (
        <div>
            <div>{`Hello ${person}(${age})!`}</div>
        </div>
    );
}

export default Greeting;