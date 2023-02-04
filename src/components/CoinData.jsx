import React from 'react'
import { Outlet } from 'react-router-dom'
function CoinData() {
  return (
    <div>CoinData
        <Outlet/>
    </div>
  )
}

export default CoinData