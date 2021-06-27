import React, { useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../App';
import CategoriesDetails from '../CategoriesDetails/CategoriesDetails';
 
const allProducts = [
    {name: 'Lenovo', category:'laptop'},{name: 'Asus', category:'laptop'},{name: 'Dell', category:'laptop'},
    {name: 'Samsung', category:'mobile'},{name: 'Nokia', category:'mobile'},{name: 'Apple', category:'mobile'},
    {name: 'Canon', category:'camera'},{name: 'Nikon', category:'camera'},{name: 'Sony', category:'camera'}

]


const Categories = () => {
    const [categories] = useContext(CategoriesContext)
      const [products, setProduct] = useState([]);
      useEffect(() => {
          const sameProduct = allProducts.filter(pd => pd.category.toLowerCase() === categories.toLowerCase());
          setProduct(sameProduct);
      },[categories])
    return (
        <div>
            <h2>This is categories page : {categories}</h2>

            {
                products.map(pd => <CategoriesDetails product={pd}></CategoriesDetails>)
            }
            
        </div>
    );
};

export default Categories;