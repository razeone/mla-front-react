import React, { useState, useEffect } from 'react';
import SearchBar from './searchBar';
import Catalog from './catalog';

const baseBackendUrl = "http://localhost:3001/api/search?query=";

function App() {

  const [productsData, setProductsData] = useState({});

  useEffect(() => {
    getProductsData();
  }, []);

  const getProductsData = async (query) => {
    const response = await fetch(baseBackendUrl + query);
    const jsonData = await response.json();
    setProductsData(jsonData);
  };

  const searchProductOnChange = (query) => {
    getProductsData(query);
  }


  return (
    <div className="container">
      <h1>Search Products</h1>
      <SearchBar searchProductOnChange={searchProductOnChange} />
      <Catalog products={productsData} />
    </div>
  );
}

export default App;
