import React from 'react'

import './styles.css'

import {useSearch} from '../../context/SearchContext'

export default function SearchContainer() {

    const {search} = useSearch()
    return (
        <div>
            <div className="content-container">
            <div className="row-content-container">
              <h3>User: {search.login}</h3>
            </div>
            <div className="row-content-container">
              <h3>Name: {search.name}</h3>
            </div>
            <div className="row-content-container">
              <h3>Public repositories: {search.public_repos}</h3>
            </div>
            <div className="row-content-container">
              <h3>Followers: {search.followers}</h3>
            </div>
            <div className="row-content-container">
              <h3>Following: {search.following}</h3>
            </div>
          </div>
        </div>
    )
}
