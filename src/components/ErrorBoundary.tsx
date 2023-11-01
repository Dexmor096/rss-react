import React from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from '../../../types'

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false
    };
  }
	static getDerivedStateFromError() {
    return { hasError: true };
  }
	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		this.setState({ hasError: true }) 
		console.error("ErrorBoundary", error, errorInfo);
	}
	render() {
		if( this.state.hasError) {
			return <div>
					<h2 className='not-found'>Something wrong</h2>
					<img src={'./assets/404.jpg'} alt="Something wrong" />
				</div>
		}
		return this.props.children
	}
}