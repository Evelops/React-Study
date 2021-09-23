import React from 'react';

function Test(){
    const arr1= [1,2,3,4,5,6,7];
    let arr2=arr1.map(x=>x*4);
    return(
        <div>
            <h1>{arr2}</h1>
        </div>
    );

}

export default Test;