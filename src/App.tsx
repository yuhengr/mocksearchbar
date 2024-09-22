import { useEffect, useState } from 'react';
import SearchBar from './SearchBar.tsx';
import SearchResults from './SearchResults.tsx';
import './App.css';

function filterResults(query: string, someData: any) {

  console.log("Filtering results");
  return query;
}

function App() {

  const APIEndpoint = "https://gist.githubusercontent.com/yuhong90/b5544baebde4bfe9fe2d12e8e5502cbf/raw/44deafab00fc808ed7fa0e59a8bc959d255b9785/queryResult.json";

  const [someData, setSomeData] = useState();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(APIEndpoint);
      const someData = await response.json();
      setSomeData(someData);
    }

    fetchData();
  }, []);

  console.log(query);

  const filteredResults = filterResults(query, someData);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setQuery={setQuery}/>
        <SearchResults results={filteredResults}/>
      </div>
    </div>
  )
}

export default App
