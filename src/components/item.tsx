import React from 'react';
import { ItemType } from '../../../types';

export default class Item extends React.Component<ItemType> {

		render() {
			const { name, image } = this.props;
			return (
				<div>
					<p className='list-item'><b>{name}</b> </p>
					<img src={image} />			
				</div>
				)
		}
}