import { createContext, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import theme from '../theme/theme'
import { Theme, ThemeProviderProps } from '../theme/types'

const initialThemeContext: Theme = {
	theme,
	setTheme: () => {},
}

const ThemeContext = createContext<Theme>(initialThemeContext)

const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [currentTheme, setCurrentTheme] = useState<typeof theme>(theme)

	const value: Theme = {
		theme,
		setTheme: () => {},
	}

	return (
		<ThemeContext.Provider value={value}>
			<StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
		</ThemeContext.Provider>
	)
}

export { ThemeContext, ThemeProvider }
