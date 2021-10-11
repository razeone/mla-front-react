import React, { useState } from 'react';

const SearchBar = (props) => {

    const [query, setQuery] = useState({
        'query': '',
        'sort': '',
        'filter': ''
    });

    function handleChange(e) {
        setQuery({
            ...query,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.searchProductOnChange(query);
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
                        value={query.query}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <select className="custom-select" onChange={handleChange} name="sort">
                        <option value="">Sort by...</option>
                        <option value="price_asc">Lower price</option>
                        <option value="price_desc">Higher price</option>
                    </select>
                </div>
                <div className="col-md-4 mb-3" >
                    <select className="custom-select" onChange={handleChange} name="filter">
                        <option value="">Filter by...</option>
                        <option value="2230284">New</option>
                        <option value="2230581">Used</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary my-1">Search</button>
            </div>
        </form>
    )
}

export default SearchBar;