import React from 'react';
import styles from './search-bar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
