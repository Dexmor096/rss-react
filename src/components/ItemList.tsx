import React from 'react';
import Item from './item';
import {ItemListProps} from "../../../types"

export default class ItemList extends React.Component<ItemListProps> {
	render() {
		const {items} = this.props;
		return(
			<div className='list'>
				{items.map(item => (
					<Item key={item.id} {...item}/>

				))}
			</div>
		)
	}
}