import React, { useContext } from 'react';
import { CategoriesContext } from '../../App';

const Header = (props) => {
    const [Categories, setCategory] = useContext(CategoriesContext);
    return (
        <div>
            <h1>Hello this is Header : {Categories}</h1>

            <button onClick={ () => setCategory("Laptop")}>Laptop</button>
            <button onClick={ () => setCategory("Mobile")}>Mobile</button>
            <button onClick={ () => setCategory("Camera")}>Camera</button>
        </div>
    );
};

export default Header;