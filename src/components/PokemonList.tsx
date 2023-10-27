import React from 'react';
import Pokemon from './Pokemon';
import {PokemonListProps} from "../../../types"

export default class PokemonList extends React.Component<PokemonListProps> {
	render() {
		const {pokemons} = this.props;
		return(
			<div className='list'>
				{pokemons.map(pokemon => (
					<Pokemon key={pokemon.name} {...pokemon}/>

				))}
			</div>
		)
	}
}