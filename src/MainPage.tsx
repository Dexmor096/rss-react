import React from 'react';
import { useState } from 'react'
 // import { ThrowedError } from '../../types'
import { ItemList } from './components/ItemList';
import Search from './components/Search';

export const MainPage: React.FC = () => {
	const [ items, setItems ] = useState([]);
	const [ isLoading, setIsloading ]= useState(false)

	const loadPokemon = (string : string) => {
		setIsloading(true)
		fetch(`https://rickandmortyapi.com/api/character/?name=${string}`)
		.then(response => {
			if (!response.ok) {
				throw new Error('Not found')
			}
			return response.json()
		})
		.then(data => (setItems(data.results), setIsloading(false)))
		.catch(() => {
			setIsloading(false)
		})
	}

		return(
			<>
				<Search 
					loadPokemon={loadPokemon}
				/>
				{ isLoading ? (<h3>Loading ...</h3>) : 
						<ItemList 
							items={items}
							isLoading={isLoading} 
							/>
				}
			</>
		)
}