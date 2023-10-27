import React from 'react'

export default class Pokemon extends React.Component {
	constructor(props: string){
		super(props)
	}
		render() {
			return (
				<p className='list-item'>This is a {this.props.name}</p>
			)
		}
}