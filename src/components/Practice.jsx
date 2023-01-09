import React, { useEffect, useState } from 'react'
import PracticeChild from './PracticeChild'
import './Practice.css'
function Practice() {
    // JS
    let arr = [
        { img: 'https://media.istockphoto.com/id/632443888/photo/founder-of-pakistan-jinnahs-tomb-called-mazar-e-quid-karachi.jpg?b=1&s=170667a&w=0&k=20&c=IWa11lLbA-cbZopeLyAc6-Lzi92WGilX84g6yuR_1Ww=', product: 'Product 1' },
        { img: 'https://media.istockphoto.com/id/632443888/photo/founder-of-pakistan-jinnahs-tomb-called-mazar-e-quid-karachi.jpg?b=1&s=170667a&w=0&k=20&c=IWa11lLbA-cbZopeLyAc6-Lzi92WGilX84g6yuR_1Ww=', product: 'Product 2' }
    ]
    let newArr = arr.map((item) => {
        return (
            <>
                <PracticeChild key={item} data={item} />
            </>
        )
    })
    return (
        <>
            {newArr}
        </>
    )
}
export function UseEffect() {
    // State Variables
    const [inpt, setInpt] = useState("")
    const [a, setA] = useState("")
    function para() {
        console.log("This is inpt : ", inpt);
    }
    function print() {
        setA(inpt);
    }
    useEffect(print, [inpt]);
    return (
        <>
            <h1>hello</h1>
            <button onClick={para}>Click</button>
            <p>{inpt}</p>
            <h2>{a}</h2>
            <input type="text" onChange={(e) => {
                setInpt(e.target.value);
            }} />
        </>
    )
}

export default Practice