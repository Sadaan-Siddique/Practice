import React from 'react'
import '../app.css'
function AboutChild(props) {
    console.log(props.data)
    return (
        <>
            
                <tr>
                    <td>{props.data.serialNum}</td>
                    <td>{props.data.name}</td>
                    <td>{props.data.attendence}</td>
                    <td>{props.data.obtainedNum}</td>
                </tr>

            {/* <td>{arr[0].heading}</td>
                    <td>{arr[0].names}</td>
                    <td>{arr[0].attendence}</td>
                    <td>{arr[0].marks}</td> */}
        </>
    )
}

export default AboutChild