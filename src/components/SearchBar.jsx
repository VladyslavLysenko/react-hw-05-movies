import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => {
  const [q, setQ] = useState('');

  const handleSubmtit = e => {
    e.preventDefault();
    onSubmit(q);
    reset();
  };

  const handleChange = e => {
    setQ(e.target.value);
  };

  const reset = () => {
    setQ(null);
  };

  return (
    <header>
      <form onSubmit={handleSubmtit}>
        <button type="submit">
          <span>Find movie</span>
        </button>
        <input
          required
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
