import React from 'react'

import {useSearch} from '../../context/SearchContext'

import './styles.css'

export default function Index() {

    const {resultText} = useSearch()

    return (
        <div>
            <p>{resultText}</p>
        </div>
    )
}
