import React from 'react';
import { Item } from './item';
import { ItemListProps } from "../../../types"
import { NotFound } from './404'

export const ItemList: React.FC<ItemListProps> = (props) => {
		const {items = [], isLoading} = props;
		return(
			<div className='list'>
				{!isLoading ? items.map(item => (
					<Item key={item.id} {...item}/>

				)) : <NotFound />
				}
			</div>
		)
}