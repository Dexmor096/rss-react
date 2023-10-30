import React from 'react';
import Item from './item';
import {ItemListProps} from "../../../types"
import NotFound from './404'

export default class ItemList extends React.Component<ItemListProps> {
	render() {
		const {items = [], isError} = this.props;
		return(
			<div className='list'>
				{!isError ? items.map(item => (
					<Item key={item.id} {...item}/>

				)) : <NotFound />
				}
			</div>
		)
	}
}