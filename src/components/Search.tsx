import React from 'react';
import { SearchProps } from '../../../types'

export default class Search extends React.Component<SearchProps> {
	state= {
		searchValue: ''
	}
	handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ searchValue: e?.target.value });
	}
	handleSearch = () => {
		this.props.loadPokemon(this.state.searchValue)
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
  	        <button onClick={this.handleSearch}>Load</button>
  	      </div>
			</>
		)
	}
}