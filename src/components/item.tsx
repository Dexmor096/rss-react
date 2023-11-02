import React from 'react';
import { ItemTypeProps } from '../../../types';

export const Item: React.FC<ItemTypeProps>  = (props) => {
			const { name, image } = props;
			return (
				<div>
					<p className='list-item'><b>{name}</b> </p>
					<img src={image} />			
				</div>
				)
}