import React from 'react'

import './styles.css'
import {useSearch} from '../../context/SearchContext'
import SearchProvider from '../../context/SearchContext'

export default function Index() {

    const {setSearch} = useSearch()

    return (
    <SearchProvider>
        <div>
            <input type="text"
            name="search" 
            id="search" 
            onChange={ (e) => setSearch(e.target.value) }
            placeholder='type a GitHub user'/>
        </div>
    </SearchProvider>
    )
}
