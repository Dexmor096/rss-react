import React from 'react';
import { PokemonType } from '../../../types';

export default class Pokemon extends React.Component<PokemonType> {

		render() {
			const { name } = this.props;
			return (
				<p className='list-item'>This is a <b>{name}</b> </p>			)
		}
}