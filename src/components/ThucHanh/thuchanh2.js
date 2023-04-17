import React from 'react';
import PropTypes from 'prop-types';
const Loading = () => {
    return (
      <div class="loader"></div>
    );
};
function thuchanh2 (){
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 5000);
      }, []);

    return (
        <div>
            
        </div>
    );
};



export default thuchanh2;