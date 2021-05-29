import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/Header/Header'
import MainPage from './components/Pages/MainPage'

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="app">
          <Header />
          <MainPage />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
