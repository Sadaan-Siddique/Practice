import React from 'react'

function BokkChild(recieve) {
  return (
<>
<div className='border-3'>{recieve.sender}</div>
<h1>{recieve.again}</h1>
</>
    )
}

export default BokkChild