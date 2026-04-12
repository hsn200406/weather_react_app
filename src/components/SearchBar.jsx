import { useState } from 'react';

function SearchBar({ onSearch }) {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(value.trim()); // Trims the city name to remove extra spaces
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex gap-2 mb-4 w-100">
            <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter city name...."
                value={value}
                onChange={(e) => setValue(e.target.value)} // Updates the state with the current input value
            />
            <button type="submit" className="btn btn-primary btn-sm">
                Search
            </button>
        </form>
    );
}

export default SearchBar;