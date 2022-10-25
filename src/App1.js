import Btn from './component/Btn';
import styles from './assets/css/App.module.css';

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome React</h1>
      <Btn text="hi" />
    </div>
  );
}

export default App;
