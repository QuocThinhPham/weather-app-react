import Search from 'components/Search';
import React from 'react';

const NotFound = () => {
    return (
        <div className="wrapper" style={{ flexDirection: 'column' }}>
            <h1 className="not-found">
                City not found,
                <br /> try again
            </h1>
            <Search style={{ textAlign: 'center' }} />
        </div>
    );
};

export default NotFound;
