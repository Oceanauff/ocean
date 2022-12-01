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
        console.log(json);
      });
  }, []);

  const onChange = event => {
    console.log(event.target.value);
    setSearch(prev => event.target.value);
  };

  const onClick = event => {
    console.dir(event.target);
  };

  const fetchingInfo = event => {
    fetch('/api.php?request=appdetails&appid=' + search)
      .then(response => response.json())
      .then(json => {
        setTop100(json);
        setLoading(false);
      });
    console.log('dd');
    console.log(top100);
    console.dir(top100);
    console.log(typeof top100);
  };

  return (
    <>
      <h1>The Games!</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          <div class="col-sm-10">
            <input onChange={onChange} class="form-control" id="formGroupInputSmall" placeholder="plz game tag" />
            <button onClick={fetchingInfo} class="btn btn-primary">search</button>
          </div>
          {/* <button onClick={twoWeeksTop}>2 Weeks Top 100 games</button> */}
          {Object.values(top100).map((data, idx) => (
            <li key={data.name} onClick={onClick}>
              {/* {data.name} ({data.symbol}: ${data.quotes.USD.price} USD) */}
              {idx + 1}. {data.name} ({data.positive} 따봉) - 할인률 :{' '}
              {data.discount}%
            </li>
          ))}
        </>
      )}
    </>
  );
}

export default App;
