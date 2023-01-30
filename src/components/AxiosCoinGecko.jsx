import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function AxiosCoinGecko() {
   const [ coinData , setCoinData] = useState([]);
   axios.get('https://api.coingecko.com/api/v3/coins/list').then((res)=>{
    console.log(res.data[0]);
   }).catch((err)=>{
    console.log(err)
   });
    return (
    <div>AxiosCoinGecko</div>
  )
}

export default AxiosCoinGecko