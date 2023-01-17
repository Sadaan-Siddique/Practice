import React from 'react'

function AboutChild(props) {
    console.log(props.data)
    return (
        <>
            <table border={'2px'} cellSpacing={'5px'}>
                <caption>Table</caption>
                <tr>
                    <td>{props.data.heading}</td>
                    <td>{props.data.names}</td>
                    <td>{props.data.attendence}</td>
                    <td>{props.data.marks}</td>
                </tr>
                <tr>
                    <td>{props.data.firstStudent}</td>
                    <td>{props.data.secondStudent}</td>
                    <td>{props.data.thirdStudent}</td>
                    <td>{props.data.fourthStudent}</td>
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