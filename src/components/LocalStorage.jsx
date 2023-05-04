import React, { useState, useEffect } from 'react';

function NodeDbUpdate() {
    const [num, setNum] = useState(0);
    const addfunc = () => {
        setNum(num + 1);
        // console.log(num);
    }

    const subtractfunc = () => {
        setNum(num - 1);
    }

    useEffect(() => {
        const newNum = localStorage.getItem('addingNumber');
        console.log(newNum);
        if (newNum == 0 || !newNum) {
            console.log('Firstly Add Data');
        } else {
            setNum(JSON.parse(newNum));
            console.log(newNum);
        }
    }, [])

    useEffect(() => {
        // localStorage.setItem('addingNumber', JSON.stringify(num));
        localStorage.setItem('addingNumber', JSON.stringify(num));
        console.log(num);
    }, [num]);
    return (
        <>
            <div className="text-center">
                <button className='btn btn-dark mt-3 fw-bold' onClick={addfunc}>Add to Cart</button>
                <button className='btn btn-dark mt-3 ms-1 fw-bold' onClick={subtractfunc}>Subtract from Cart</button>
                <h3>{num}</h3>
            </div>
        </>
    )
}

export default NodeDbUpdate