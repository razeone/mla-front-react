import React, { useState } from 'react';
import SearchBar from './searchBar';
import Catalog from './catalog';

const baseBackendUrl = "http://localhost:3001/api/search?query=";

function App() {

  const [productsData, setProductsData] = useState({});

  const getProductsData = async (query) => {
    const response = await fetch(buildUrl(query));
    const jsonData = await response.json();
    setProductsData(jsonData);
  };

  const searchProductOnChange = (query) => {
    getProductsData(query);
  }

  const buildUrl = (query) => {
    let sort = (query.sort !== '') ? '&sort=' + query.sort : '';
    let filter = (query.filter !== '') ? '&filter=' + query.filter : '';
    return baseBackendUrl + query.query + sort + filter
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
