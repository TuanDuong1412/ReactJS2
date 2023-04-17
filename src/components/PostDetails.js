import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const params = useParams();
    const bc = params.Abc;

    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'flex-start',
        }}
    >
       POST ID = {bc}
    </div>
    );
};

export default PostDetails;