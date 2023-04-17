import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const UserDetails = () => {
    const isLoggedIn  = false;
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/")
        }
    }, [])
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-start',
            }}
        >
           User Details
        </div>
    )
}
export default UserDetails;