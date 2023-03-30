import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { MainPageContainer } from './styles/MainPageConatiner'
import GlobalStyles from './theme/GlobalStyles'
import CustomRoutes from './routes/routes'

function App() {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(prevIsOpen => !prevIsOpen)
	}

	return (
		<>
			<GlobalStyles />
			<Navbar toggle={toggle} />
			<MainPageContainer>
				<Sidebar isOpen={isOpen} />
				<CustomRoutes />
			</MainPageContainer>
		</>
	)
}

export default App
