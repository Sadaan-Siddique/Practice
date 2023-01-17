import React from 'react'
import '../app.css'
function AboutChild(props) {
    console.log(props.data)
    return (
        <>
            <table border={'5px'} cellPadding={'5px'} cellSpacing={'5'} align={'center'}>
                <caption>Table</caption>
                <tr>
                    <td>S.No</td>
                    <td>Names</td>
                    <td>Attendence</td>
                    <td>Obtained Marks</td>
                </tr>
                <tr>
                    <td>{props.data.serialNum}</td>
                    <td>{props.data.name}</td>
                    <td>{props.data.attendence}</td>
                    <td>{props.data.obtainedNum}</td>
                </tr>

            </table>
            {/* <td>{arr[0].heading}</td>
                    <td>{arr[0].names}</td>
                    <td>{arr[0].attendence}</td>
                    <td>{arr[0].marks}</td> */}
        </>
    )
}

export default AboutChild