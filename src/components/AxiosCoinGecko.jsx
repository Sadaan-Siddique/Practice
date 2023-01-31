import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function AxiosCoinGecko() {
  const [coinData, setCoinData] = useState([]);
  axios.get('https://api.coingecko.com/api/v3/coins').then((res) => {
    setCoinData(res.data)
    // console.log(res.data[0].id);
  }).catch((err) => {
    console.log(err)
  });
  return (
    <>
      <div>AxiosCoinGecko</div>
      <table className='table'>
        <caption>Currency Data</caption>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>24h Volume</th>
            <th>Mkt Cap</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coinData.map((item) => {
            return (<>
              <tr>
                <td>{item.id}</td>
                <td>${item.market_data.current_price.aed}</td>
                <td>{item.market_data.price_change_percentage_1h_in_currency.aed}</td>
                <td>{item.market_data.price_change_percentage_24h_in_currency.aed}</td>
                <td>{item.market_data.price_change_percentage_7d_in_currency.aed}</td>
                <td>{item.market_data.total_volume.aed}</td>
                <td>${item.market_data.market_cap_change_percentage_24h_in_currency.aed}</td>
                <td>{item.market_data.total_volume.aed}</td>
              </tr>
            </>)
          })}
        </tbody>
      </table>

    </>
  )
}

export default AxiosCoinGecko 