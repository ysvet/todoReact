import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    searchfield: ''
  };

 onSearchChange = (e) => {
   const searchfield = e.target.value;
   this.setState({searchfield});
   this.props.onSearchChange(searchfield);
 };

  render() {
  return (
    <input type="text"
              className="form-control search-input"
              placeholder="type to search"
              value = {this.state.searchfield}
              onChange = {this.onSearchChange} />
  );
 }
};
