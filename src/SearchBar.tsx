import { useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}

function displaySearchResults() {
    console.log("Button clicked. Showing search results.");
}

function SearchBar({setQuery}:SearchBarProps) {

    const [input, setInput] = useState('');

    return (
        <div className='search-bar'>
            <input
                placeholder='Search...'
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                    setQuery(e.target.value);
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