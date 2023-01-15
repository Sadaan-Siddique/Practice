import React from 'react'
import { useState } from 'react';
import ProductChild from './ProductChild';
function Product() {
  const [inpt,setInpt] = useState('');
  const [arr,setArr] = useState([1,2,3]);
    // JS
    var b;
    function inptfunc(e){
      setInpt(e.target.value);
      console.log(inpt);
    }
    function btn(){
    setArr([...arr,inpt]);
      var b = arr.filter((item)=>{
         if(item > 5){
             console.log('hello');
             function first(){
                let f = 'sadaan';
                console.log(f);
             }
             first();
        }else if(item == 4){
          console.log('This is Four')
        }else{
          console.log('Sorry');
        }
        
      })
      console.log(b);
    }
    // HTML
    return(
      <>
      <h1>{arr+inpt}</h1>
      UserName :    <input type="text" onChange={inptfunc}/>
      <button onClick={btn}>Submit</button>
      </>
    )
  
}

export default Product