import React from 'react'

import {GiRadarDish} from 'react-icons/gi'

import './globals.css'

import SearchButton from './components/SearchButton/Index'
import SearchInput from './components/SearchInput/Index'
import SearchContainer from './components/SearchContainer/Index'
import SearchResult from './components/SearchResult/Index'

import SearchContext from './context/SearchContext'


export default function App() {
  




  return (
    <SearchContext>
      <div className='main-container'>
        <h1> <GiRadarDish size={32}/>Dev Radar</h1>
        <h3>Search for devs and return your data.</h3>
          <div className="search-container">
          <SearchInput placehodler='test'/>
          <SearchButton/>
          </div>
          <SearchResult/>
          <SearchContainer/>
      </div>
    </SearchContext>
    )
}
