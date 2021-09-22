import { useEffect, useState } from 'react';
import getNewsData from './utils/getNewsData';
import NewsCards from './components/NewsCards';
import './App.css';

function App() {
  const [newsData, setNewsData] = useState([])
  useEffect(() => {
    getNewsData()
      .then(result => setNewsData(result))
    
  }, [])
  
  return (
    <div className="App">
      <div className="container">
        <NewsCards newsData={newsData} />
      </div>
    </div>
  );
}

export default App;