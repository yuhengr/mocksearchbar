import SearchResultView from './SearchResultView.tsx';

interface SearchResultsProps {
    results: string;
};

function SearchResults({results}:SearchResultsProps) {

    return(
        <div className="search-results-container">
            <p>The search was: {results}</p>
            <SearchResultView />
        </div>
    );
}

export default SearchResults;
