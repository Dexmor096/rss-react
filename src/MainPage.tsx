import React from 'react';
import PokemonList from './components/PokemonList'
import Search from './components/Search'

export default class MainPage extends React.Component {
 render() {
	return(
		<>
			<Search />
			<PokemonList />
		</>
	)
 }
}