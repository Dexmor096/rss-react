import './App.css'
import React from 'react'
import MainPage from './MainPage'
import ErrorBoundary from './components/ErrorBoundary'

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <ErrorBoundary>
        <MainPage />
      </ErrorBoundary>
    )
  }
}

export default App
