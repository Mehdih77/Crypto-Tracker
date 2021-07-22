import styles from './Search.module.css';

const SearchBar = ({onChange}) => {
  return (
    <div className={styles.coin_search}>
      <input className={styles.coin_input} type='text' placeholder='Search...' onChange={onChange} />
    </div>
  );
};

export default SearchBar;
