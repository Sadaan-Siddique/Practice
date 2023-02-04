import React from 'react'
import { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom';
import axios from 'axios'
function AxiosCoinGecko() {
  const [coinData, setCoinData] = useState([]);
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/list').then((res) => {
      setCoinData(res.data)
      console.log(res.data);
    }).catch((err) => {
      console.log(err)
    })
  }, []);
  return (
    <>
      <div>AxiosCoinGecko</div>
      <table className='table'>
        <caption>Currency Data</caption>
        <thead>
          <tr>
            <th>Id</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coinData.map((item,index) => {
            return (<>
              <tr>
                <td>{index + 1} . <Link to={`/data/${item.id}`}>{item.id}</Link></td>
                <td>{item.symbol}</td>
                <td>${item.name}</td>
                {/* <td>  <img src={`https://www.coingecko.com/coins/${index + 1}/sparkline`} alt='Graph'/></td> */}
              </tr>
            </>)
          })}
        </tbody>
      </table>

    </>
  )
}

export default AxiosCoinGecko 