import React from 'react';

const call = () =>{
    console.log('event 발생!');
}

export default function Event(){
    return (
        <div>
            <button onClick={call}>Click</button>
        </div>
    );
}