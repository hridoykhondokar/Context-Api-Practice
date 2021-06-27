import './App.css';
import Home from './component/Home/Home';
import Shipment from './component/Shipment/Shipment';
import Header from './component/Header/Header';
import { createContext, useState } from 'react';

export const CategoriesContext = createContext();

function App() {

  const [Categories, setCategory] = useState("laptop");

  return (
    <CategoriesContext.Provider value={[Categories, setCategory]}>
      <p>count value : {Categories}</p>
    <Header></Header>
    <Home></Home>
    <Shipment></Shipment> 
   

    </CategoriesContext.Provider>
  );
}

export default App;
