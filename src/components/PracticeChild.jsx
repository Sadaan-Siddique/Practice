import React from 'react'

function PracticeChild(props) {
    console.log(props.data)
    // let item = props.data
  return (
    <>
    <div className='container fw-bold mt-5 w-25  border-3 border-danger'>
      <img  src={props.data.img} alt="" />
        <h1>{props.data.product}</h1>
        
    </div>
    </>
  )
}

export default PracticeChild