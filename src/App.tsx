import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Start from './pages/Start'
import Students from './pages/Students'
import GlobalStyles from './theme/GlobalStyles'

function App() {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(prevIsOpen => !prevIsOpen)
	}

	return (
		<>
			<GlobalStyles />
			<Navbar toggle={toggle} />
			<div className="container" style={{ display: 'flex', minHeight: 'calc(100vh - 82px)' }}>
				<Sidebar isOpen={isOpen} />
				<Routes>
					<Route path="/" element={<Start isOpen={isOpen} />} />
					<Route path="/students" element={<Students isOpen={isOpen} />} />
				</Routes>
			</div>
		</>
	)
}

export default App
