import React from 'react';
import NotFound from './components/404'
import ItemList from './components/ItemList';
import Search from './components/Search';

export default class MainPage extends React.Component {
	state = {
		items: [],
		isLoading: false
	};

	loadPokemon = (string : string) => {
		this.setState({isLoading: true})
		fetch(`https://rickandmortyapi.com/api/character/?name=${string}`)
		.then(response => response.json())
		.then(data => this.setState({items: data.results, isLoading: false}))
		.catch(Error)
	}
 	render() {
		return(
			<>
				<Search loadPokemon={this.loadPokemon}/>
				{ this.state.items.length < 1 ? (<NotFound />) : 
				<ItemList items={this.state.items}/>
				}
			</>
		)
 }
}