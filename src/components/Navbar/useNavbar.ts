import React from 'react'
import { SiteMapMock, siteMapMock } from 'mocks/navbar.mocks'

const useNavbar = () => {
    /** States */
    const [results, setResults] = React.useState<SiteMapMock[]>([]);
    const [isScroll, setIsScroll] = React.useState<boolean>(false);
    const [previousScrollPosition, setPreviousScrollPosition] = React.useState(0);

    const handleSearchPage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setResults([])
        } else {
            const searchResults: SiteMapMock[] = siteMapMock.filter((item: SiteMapMock) => item.label.toLowerCase().includes(e.target.value.toLowerCase()));
            setResults(searchResults)
        }
    }

    const handleGetScroll = () => {
        const currentScrollPosition: number = window.pageYOffset;
        setIsScroll(currentScrollPosition < previousScrollPosition);
        setPreviousScrollPosition(currentScrollPosition);
    }

    React.useEffect(() => {
        window.addEventListener('scroll', handleGetScroll);

        return () => {
            window.removeEventListener('scroll', handleGetScroll)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [previousScrollPosition])

    React.useEffect(( ) => {
        const mainTag: HTMLDivElement = document.getElementById('main') as HTMLDivElement;
        const navbarContainer: HTMLElement = document.getElementById('navbar__container') as HTMLElement;

        if (isScroll) {
            navbarContainer.classList.add('navbar__container');
            navbarContainer.classList.remove('navbar__estatic');
            mainTag.style.marginTop = `${navbarContainer.clientHeight.toString()}px`;
        } else {
            navbarContainer.classList.add("navbar__estatic");
            navbarContainer.classList.remove("navbar__container");
            mainTag.style.marginTop = `0px`;
        }
    }, [isScroll])

    return {
        results,
        handleSearchPage
    }
}

export default useNavbar