import react from 'react';
import Btn from './component/Btn';
import styles from './assets/css/App.module.css';

function App() {
  const [keyword, setKeyword] = react.useState('');
  const onChange = event => {
    setKeyword(event.target.value);
  };
  console.log('i run all the time');
  react.useEffect(() => {
    console.log('CALL THE API');
  }, []);
  react.useEffect(() => {
    console.log('Searching');
  }, [keyword]);
  return (
    <div>
      <h1 className={styles.title}>Welcome React</h1>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="search box"
      />
      <button>search</button>
      <div>
        <Btn text="hi" />
      </div>
    </div>
  );
}

export default App;
