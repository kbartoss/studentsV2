export type Theme = {
	theme: {
		avatarColors: string[]
		grade: {
			high: string
			mid: string
			low: string
			border: string
		}
		color: {
			primaryColor: string
			secondaryColor: string
			blackColor: string
			whiteColor: string
			sidebarActiveBg: string
			tableRowBg: string
			deleteButton: string
			deleteButtonHover: string
			cancelButtonHover: string
			inputBorder: string
			dropdownP: string
			paginationSpan: string
			optionsBorder: string
			optionsMobileBackgroud: string
			optionsMobileBorder: string
			optionsMobileHover: string
			errorText: string
			confirmBtnBgHover: string
			backBtnBgHover: string
		}
	}
	setTheme: () => void
}

export type ThemeProviderProps = {
	children: React.ReactNode
}
