import React, { useContext } from 'react';

const CategoriesDetails = (props) => {

    const {name} = props.product;
    return (
        <div>
            <h6>Selected Categories : {name}</h6>
        </div>
    );
};

export default CategoriesDetails;