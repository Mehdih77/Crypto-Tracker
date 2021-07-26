import styles from './Search.module.css';

const SearchBar = ({onChange}) => {
  return (
    <div className={styles.coin_search}>
      <input className={styles.coin_input} type='text' placeholder='Search...' onChange={onChange} />
      <button><i className="fas fa-search"></i></button>
    </div>
  );
};

export default SearchBar;
