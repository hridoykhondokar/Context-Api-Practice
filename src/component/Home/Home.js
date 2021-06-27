import React, { useContext } from 'react';
import { CategoriesContext } from '../../App';
import Categories from '../Categories/Categories';


const Home = () => {

    const categories = useContext(CategoriesContext)

    return (
        <div>
            
            <h1>Hello this is Home : {categories}</h1>
            <Categories></Categories>
        
        </div>
    );
};

export default Home;