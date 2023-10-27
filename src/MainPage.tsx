import React from 'react';
import PokemonList from './components/PokemonList';
import Search from './components/Search';

export default class MainPage extends React.Component {
	state = {
		pokemons: []
	};
	componentDidMount() {
		fetch(`https://pokeapi.co/api/v2/pokemon`)
		.then(response => response.json())
		.then(data => this.setState({pokemons: data.results}));
		
	}
	searchPokemon = (string : string) => {
		string
	}
 	render() {
		return(
			<>
				<Search />
				<PokemonList pokemons={this.state.pokemons}/>
			</>
		)
 }
}