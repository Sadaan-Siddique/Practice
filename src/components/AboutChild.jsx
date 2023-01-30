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
        </>
    )
}

export default AboutChild