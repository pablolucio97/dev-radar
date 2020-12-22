import React, {useState} from 'react'

import {ImSearch} from 'react-icons/im'

import axios from 'axios'

import {useSearch} from '../../context/SearchContext'
import SearchContext from '../../context/SearchContext'

import './styles.css'

export default function SearchButton() {


    const {search, setSearch, resultText, setResultText} = useSearch()

    const searchDev = async () => {
      setResultText('Searching...')
        try {
          await setTimeout( () => {
          axios.get(`https://api.github.com/users/${search}`)
          .then(response => {setSearch(response.data)})
          setResultText('')
        }, 700 )
      } catch (error) {
        console.log(error)
      }
    }
  


    return (
     <SearchContext>
        <button onClick={searchDev}>
        {<ImSearch size={16}/>}
        </button>
     </SearchContext>
    )
}
