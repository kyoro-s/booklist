import React, { Component } from 'react';

const Search = ({ value, onChange, children }) => 
  <form>
    {children}
    <input type="text" value={value} />
  </form>

export default Search;
