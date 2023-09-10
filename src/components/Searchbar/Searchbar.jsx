import React, { useState } from 'react';
import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  // SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({onSubmit}) => {
   const [query, setQuery] = useState('');
  
  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query)
  };

  
    return (
      <SearchBar>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
           🔍
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}
          />
        </SearchForm>
      </SearchBar>
    );
  }

