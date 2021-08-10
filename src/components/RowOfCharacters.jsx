import React from 'react';

const RowOfCharacters = ({ children }) => {
    return(
        <div className="row my-3">
            {children}
        </div>
    );
};

export default RowOfCharacters;