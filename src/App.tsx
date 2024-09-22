import { useEffect, useState } from 'react';
import SearchBar from './SearchBar.tsx';
import './App.css';

function App() {

  const APIEndpoint = "https://gist.githubusercontent.com/yuhong90/b5544baebde4bfe9fe2d12e8e5502cbf/raw/44deafab00fc808ed7fa0e59a8bc959d255b9785/queryResult.json";

  const [someData, setSomeData] = useState();
  const [resultItems, setResultItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(APIEndpoint);
      const someData = await response.json();
      setSomeData(someData);
      setResultItems(someData.ResultItems);
    }

    fetchData();
  }, []);

  console.log(`Displaying App component`);
  console.log(someData);
  console.log(resultItems);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar />
        <div>Search Results</div>
      </div>
    </div>
  )
}

export default App
