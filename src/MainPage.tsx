import React from 'react';
import ItemList from './components/ItemList';
import Search from './components/Search';

export default class MainPage extends React.Component {
	state = {
		items: []
	};

	loadPokemon = (string : string) => {
		fetch(`https://rickandmortyapi.com/api/character/?name=${string}`)
		.then(response => response.json())
		.then(data => this.setState({items: data.results}))
		.catch(Error)
	}
 	render() {
		return(
			<>
				<Search loadPokemon={this.loadPokemon}/>
				<ItemList items={this.state.items}/>
			</>
		)
 }
}