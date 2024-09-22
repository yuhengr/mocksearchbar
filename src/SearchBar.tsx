import { useState } from 'react';
import './SearchBar.css';


function displaySearchResults() {
    console.log("Button clicked. Showing search results.");
}

function SearchBar() {

    const [input, setInput] = useState('');

    return (
        <div className='search-bar'>
            <input
                placeholder='Search...'
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                }}>
            </input>
            <button
                onClick={() => {
                    displaySearchResults();
                }}>
                <p>Search</p>
            </button>
        </div>
    );
}

export default SearchBar;