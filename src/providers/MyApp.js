import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export default  MyAppContext = createContext( {
    isLogin:false,
    massage:'',
    setMessage:message  => undefined,
});
export const MyAppProvider = ({children}) => {
    const [message, setMessage] = useState ('');

    return (
        <MyAppContext.Provider  
        value = {{
                isLogin:false,
                massage:'',
                setMessage: setMessage,
            }}>
           {children}
        </MyAppContext.Provider>
    );
};



