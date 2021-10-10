import React, { useState } from 'react';

const SearchBar = (props) => {

    const [query, setQuery] = useState("");

    function handleChange(e) {
        setQuery(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.searchProductOnChange(query);
        //setQuery("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <input 
                        type="text"
                        id="query"
                        placeholder="Search product"
                        name="query"
                        value={query}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <select className="custom-select">
                        <option>Sort by...</option>
                        <option>Lower price</option>
                        <option>Higher price</option>
                        <option>More relevant</option>
                    </select>
                </div>
                <div className="col-md-4 mb-3">
                    <select className="custom-select">
                        <option>Filter by...</option>
                        <option>New</option>
                        <option>Other</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary my-1">Search</button>
            </div>
        </form>
    )
}

export default SearchBar;