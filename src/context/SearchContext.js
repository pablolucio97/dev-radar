import React, {createContext, useContext, useState} from 'react'

const SearchContext = createContext()

export default function SearchProvider({children}){

    const[search, setSearch] = useState([])
    const [resultText, setResultText] = useState('')


    return(
        <SearchContext.Provider value={{search, setSearch, resultText, setResultText}}>
            {children}
        </SearchContext.Provider>
    )

}

export function useSearch(){
    const context = useContext(SearchContext)
    const {search, setSearch, resultText, setResultText}  = context
    return {search, setSearch, resultText, setResultText}
}