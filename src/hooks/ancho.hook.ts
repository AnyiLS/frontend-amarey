import React from "react"

const useLayout = () => {
    /** States */
    const [width, setWidth] = React.useState<number>(window.innerWidth);
    const [height, setHeight] = React.useState<number>(window.innerHeight);
    const [isSmallScreen, setIsSmallScreen] = React.useState<boolean>(false);

    React.useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        })

        return () => {
            window.removeEventListener('resize', () => {
                setWidth(window.innerWidth);
                setHeight(window.innerHeight);
            })
        }
    }, [])

    React.useEffect(() => {
        setIsSmallScreen(width <= 1400 && height <= 625);
    }, [width, height])

    return {
        width,
        height,
        isSmallScreen
    }
}

export default useLayout