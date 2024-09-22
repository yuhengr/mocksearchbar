
interface SearchResultsProps {
    results: string;
};

function SearchResults({results}:SearchResultsProps) {

    return(
        <div className="search-results-container">
            <p>The search was: {results}</p>
        </div>
    );
}

export default SearchResults;
