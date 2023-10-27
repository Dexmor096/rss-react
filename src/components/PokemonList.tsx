import React from 'react';
import Pokemon from './Pokemon'

export default class PokemonList extends React.Component {
	constructor(props: []){
		super(props)
		const {pokemons} = props;

	}
	render() {
		return(
			<div className='list'>
				{pokemons.map(pokemon => {
					<Pokemon key={pokemon.name} {...pokemon}/>

				})}
			</div>
		)
	}
}