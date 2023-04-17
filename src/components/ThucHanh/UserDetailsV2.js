import React from 'react';

const UserDetailsV2 = () => {
    const isLoggedIn  = false;
    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'flex-start',
        }}
    >
        {!isLoggedIn && <Navigate to="/" />}
        User Details
    </div>
    );
};

export default UserDetailsV2;