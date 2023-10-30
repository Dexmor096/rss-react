import React from 'react';
import ItemList from './components/ItemList';
import Search from './components/Search';

export default class MainPage extends React.Component {
	state = {
		items: [],
		isLoading: false,
		isError: false
	};

	loadPokemon = (string : string) => {
		this.setState({isLoading: true})
		fetch(`https://rickandmortyapi.com/api/character/?name=${string}`)
		.then(response => {
			if (!response.ok) {
				throw new Error('Not found')
			}
			return response.json()
		})
		.then(data => this.setState({items: data.results, isLoading: false}))
		.catch(error => {
			console.error('Error', error)
			this.setState({isError: true, isLoading: false})
		})
	}
 	render() {
		return(
			<>
				<Search loadPokemon={this.loadPokemon}/>
				{ this.state.isLoading ? (<h3>Loading ...</h3>) : 
				<ItemList 
					items={this.state.items}
					isLoading={this.state.isLoading} 
					isError={this.state.isError}/>
				}
			</>
		)
 }
}