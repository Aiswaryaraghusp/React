import React from 'react'

function Spreadoperator() {
  

     const array1=[1,2,3];
     const newarray=[...array1];
     console.log(newarray);

     const array2=[4,5,6]
     const newarray2=[...array1,...array2];

     console.log(newarray2);

     const obj1={1:'a',2:'b'};
     const obj2={...obj1};
     console.log(obj2);

  return (
    <div>Spreadoperator</div>
  )
}

export default Spreadoperator