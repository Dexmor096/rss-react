import React from 'react';

export default class Search extends React.Component {
render(): React.ReactNode {
	return (
		<>
		<div className="input-field col s6">
          <input className="search" placeholder="Search" id="search" type="text" />
          <button>Search</button>
        </div>
		</>
	)
	}
}