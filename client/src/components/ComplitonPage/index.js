import React from 'react'
import { useSelector } from 'react-redux'

import "./index.css"
import NavBar from '../NavBar'
const ComplitionPage = () => {
    const currentLocation = useSelector(state => state.currentLocation)
    const toLocation = useSelector(state => state.toLocation)
    let amount = parseInt(toLocation.price)
    const cgst = (amount * 15) / 100 
    const sgst = (amount * 20) / 100
    const totalAmount = amount + cgst + sgst
    return (
        <div className='checkout-cotainer'>
            <NavBar/>
            <div >
                <table>
                    <thead>
                        <tr>
                            <th>city</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{`${currentLocation.location} To ${toLocation.location}`}</td>
                            <td>{toLocation.price}/-</td>
                        </tr>
                        <tr>
                            <td>SGST (20%)</td>
                            <td>{sgst}/-</td>
                        </tr>
                        <tr>
                            <td>CGST (15%)</td>
                            <td>{cgst}/-</td>
                        </tr>
                        
                        <tr>
                            <td>Total Amount in Rupees/-</td>
                            <td>{totalAmount}/-</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ComplitionPage