import React, { useState } from 'react';

const SearchBar = (props) =>{
  const [term , setTerm] = useState('');

  const onFormSubmit = (event) =>{
     event.preventDefault();
     props.onSubmit(term);
  }

  const onInputChange = (event) =>{
      setTerm(event.target.value);
  };

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input
            type="text"
            value={term}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );

};


export default SearchBar;
