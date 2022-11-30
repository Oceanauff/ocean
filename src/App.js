import { useState, useEffect } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [top100, setTop100] = useState([]);

  useEffect(() => {
    fetch('/api.php?request=top100in2weeks')
      .then(response => response.json())
      .then(json => {
        setTop100(json);
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
        setTop100(json);
        setLoading(false);
      });
      console.log("dd");
      console.log(top100);
      console.dir(top100);
      console.log(typeof(top100));
    // fetch('/api.php?request=appdetails&appid=' + search)
    // .then(response => response.json())
    // .then(json => {
    //   setTop100(json);
    //   setLoading(false);
    // });
  };

  const twoWeeksTop = evnet => {
    fetch('/api.php?request=top100in2weeks')
      .then(response => response.json())
      .then(json => {
        setTop100(json);
        setLoading(false);
    });
    console.log(top100);
  }

  return (
    <>
      <h1>The Games! ({games.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          <input onChange={onChange} placeholder="plz game tag" />
          <button onClick={fetchingInfo}>search</button>

          {/* <button onClick={twoWeeksTop}>2 Weeks Top 100 games</button> */}
          {Object.values(top100).map((data, idx) => (
            <li>
              {/* {data.name} ({data.symbol}: ${data.quotes.USD.price} USD) */}
              {idx+1}. {data.name} ({data.symbol})
            </li>
          ))}
        </>
      )}
    </>
  );
}

export default App;
