import React from 'react';
import { SearchProps } from '../../../types'

export default class Search extends React.Component<SearchProps> {
	state= {
		searchValue: '',
		hasError: null
	}
	handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ searchValue: e?.target.value });
	}
	handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			this.props.loadPokemon(this.state.searchValue)
		}
	}
	handleError = () => {
		this.setState({ hasError: true });
	}
	handleClick = () => {
		this.props.loadPokemon(this.state.searchValue)
	}
	componentDidUpdate() {
		if (this.state.hasError) {
			throw new Error("ErrorBoundler");
		}
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
							onKeyDown={this.handleKey}
							/>
  	        <button onClick={this.handleClick}>Load</button>
						<button onClick={this.handleError}>Catch Error</button>
  	      </div>
			</>
		)
	}
}