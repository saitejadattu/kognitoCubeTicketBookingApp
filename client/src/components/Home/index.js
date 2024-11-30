import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"
import "./index.css"
import { MdFlight } from "react-icons/md";
import NavBar from "../NavBar";
const Home = () => {
    const [destinationList, setDestinationList] = useState([])
    const [currentLocation, setCurrentLocation] = useState('')
    const [toLocation, setToLocation] = useState('')
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const fetchData = async () => {
        const response = await axios.get("http://localhost:3000/")
        setDestinationList(response.data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    const handleCurrent = (destination) => {
        const destinationId = (destination.target.value)
        const destinationData = destinationList.find((eachDestination) => eachDestination.location === destinationId)
        setCurrentLocation(destinationData)
    }
    const handleTo = (destination) => {
        const destinationId = (destination.target.value)
        const destinationData = destinationList.find((eachDestination) => eachDestination.location === destinationId)
        setToLocation(destinationData)
    }
    const handleCheckout = () => {
        if (currentLocation !== '', toLocation !== '') {
            if (toLocation === currentLocation) {
                toast("please choose the correct details")
            } else {
                dispatch({ type: "currentLocation", payload: currentLocation })
                dispatch({ type: "toLocation", payload: toLocation })
                toast(`${currentLocation.location} to ${toLocation.location} `)
                setTimeout(()=>{

                    Navigate("/checkout")
                },2000)
            }
        }else{
         toast("please choose the correct details")
        }
    }
    // console.log(destinationList)
    return (
        <div>
            <NavBar/>
            <div className="home-container">
            <ToastContainer/>
            <div className="select-container">
                <label>Current location</label>
                <select onClick={handleCurrent}>
                    {destinationList && destinationList.map((eachDestination) =>
                        <option key={eachDestination.id} name={eachDestination.id}>{eachDestination.location}</option>
                    )}
                </select>
            </div>
            <div className="select-container">
                <label>To destination</label>
                <select onClick={handleTo}>
                    {destinationList && destinationList.map((eachDestination) =>
                        <option key={eachDestination.id} name={eachDestination.id}>{eachDestination.location}</option>
                    )}
                </select>
            </div>
            <button onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    )
}

export default Home