import React from 'react';

export default class NotFound extends React.Component {
	render() {
		return (
		<>
			<h2 className='not-found'>Not found</h2>
			<img src={'./assets/404.jpg'} alt="Not found" />
		</>
		)
	}
}