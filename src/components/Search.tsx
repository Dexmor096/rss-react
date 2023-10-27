import React from 'react';

export default class Search extends React.Component {
	state= {
		searchValue: ''
	}
handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: e?.target.value });
  }
render(): React.ReactNode {

	return (
		<>
		<div className="input-field">
          <input 
						className="search" 
						placeholder="Search" 
						id="search" 
						type="text" 
						value={this.state.searchValue}
						onChange={this.handleChange}
						/>
          <button>Search</button>
        </div>
		</>
	)
	}
}