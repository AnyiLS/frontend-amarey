import React from 'react'
import { SiteMapMock, siteMapMock } from 'mocks/navbar.mocks'

const useNavbar = () => {
    /** States */
    const [results, setResults] = React.useState<SiteMapMock[]>([]);

    const handleSearchPage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setResults([])
        } else {
            const searchResults: SiteMapMock[] = siteMapMock.filter((item: SiteMapMock) => item.label.toLowerCase().includes(e.target.value.toLowerCase()));
            setResults(searchResults)
        }

    }

    return {
        results,
        handleSearchPage
    }
}

export default useNavbar