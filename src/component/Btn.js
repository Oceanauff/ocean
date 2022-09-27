import PropTypes from 'prop-types';
import styles from './../assets/css/Btn.module.css';

function Btn({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Btn.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Btn;
