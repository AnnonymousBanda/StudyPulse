'use client'

const {useState, useContext, createContext, useEffect} = require('react')

const ThemeContext = createContext()

export const ThemeProvider = ({children}:{children : React.ReactNode }) => {
    const [theme, setTheme] = useState('light')

    const changeTheme = () : void => {
        if(theme === 'light'){
            document.body.classList.remove('dark')
            document.body.classList.add('light')
        } else {
            document.body.classList.remove('light')
            document.body.classList.add('dark')
        }
    }

    useEffect(() => {
      changeTheme()
    }, [theme])
    
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if(context === undefined){
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
