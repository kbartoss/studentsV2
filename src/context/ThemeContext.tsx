import { createContext, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import theme from '../theme/theme'

const defaultThemeContext = {
	theme,
	setTheme: () => {},
}

const ThemeContext = createContext(defaultThemeContext)

const ThemeProvider = ({ children }: any) => {
	const [currentTheme, setCurrentTheme] = useState<typeof theme>(theme)

	const value = {
		theme: currentTheme,
		setTheme: setCurrentTheme,
	}

	return (
		<ThemeContext.Provider value={value}>
			<StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
		</ThemeContext.Provider>
	)
}

export { ThemeContext, ThemeProvider }
