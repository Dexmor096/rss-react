import './App.css'
import React from 'react'
import { MainPage } from './MainPage'
import ErrorBoundary from './components/ErrorBoundary'

const App :React.FC = () => {
    return (
      <ErrorBoundary>
        <MainPage />
      </ErrorBoundary>
    )
}

export default App
