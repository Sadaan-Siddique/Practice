import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function AxiosCoinGecko() {
  const [coinData, setCoinData] = useState([]);
  axios.get('https://api.coingecko.com/api/v3/coins/list').then((res) => {
    // setCoinData(res.data)
    console.log(res.data[0].id);
  }).catch((err) => {
    console.log(err)
  });
  return (
    <>
      <div>AxiosCoinGecko</div>
      <h1>{coinData.data}</h1>
    </>
  )
}

export default AxiosCoinGecko 