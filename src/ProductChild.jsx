import React from 'react'

function ProductChild(props) {
    console.log(props.data)
  return (
    <>
    <div>{props.data}</div>
    </>
  )
}

export default ProductChild