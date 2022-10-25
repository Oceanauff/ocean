import { useState, useEffect } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('/api.php?request=appdetails&appid=730')
      .then(response => response.json())
      .then(json => {
        setGames(json);
        setLoading(false);
      });
  }, []);

  const testFunc = event => {
    alert('Clicked!!!');
  };

  const onChange = event => {
    console.log(event.target.value);
    setSearch(prev => event.target.value);
  };

  const fetchingInfo = event => {
    fetch('/api.php?request=appdetails&appid=' + search)
      .then(response => response.json())
      .then(json => {
        setGames(json);
        setLoading(false);
      });
  };

  return (
    <>
      <h1>The Games! ({games.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          <input onChange={onChange} placeholder="plz game tag" />
          <button onClick={fetchingInfo}>search</button>
          <ul onClick={testFunc}>- {games.name}</ul>
        </>
      )}
    </>
  );
}

export default App;
