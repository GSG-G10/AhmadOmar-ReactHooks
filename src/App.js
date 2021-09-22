import { useEffect, useState } from 'react';
import getNewsData from './utils/getNewsData';
import NewsCategories from './components/NewsCategories';
import NewsCards from './components/NewsCards';
import './App.css';

function App() {
  const [newsData, setNewsData] = useState([])
  const [categoryValue, setCategoryValue] = useState('all')
  useEffect(() => {
    getNewsData(categoryValue)
      .then(result => setNewsData(result))
    
  }, [categoryValue])
  
  return (
    <div className="App">
      <div className="container">
        <NewsCategories categoryValue={categoryValue} setCategoryValue={setCategoryValue} />
        <NewsCards newsData={newsData} />
      </div>
    </div>
  );
}

export default App;