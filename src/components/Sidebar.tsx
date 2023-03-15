import { Link, useLocation } from 'react-router-dom'
import { StyledSidebar } from '../styles/Sidebar.styles'
import StudentsIcon from '../icons/StudentsIcon'
import StartIcon from '../icons/StartIcon'

const Sidebar = ({ isOpen }: any) => {
	const location = useLocation()

	const isActive = (path: string) => {
		return location.pathname === path
	}

	console.log(isOpen)

	return (
		<StyledSidebar className={`${isOpen ? '' : 'closed'}`}>
			<Link to="/" className={`${isActive('/') ? 'active' : ''}`}>
				<StartIcon stroke={isActive('/') ? 'white' : 'black'} />
				<span>Start</span>
			</Link>
			<Link to="/students" className={`${isActive('/students') ? 'active' : ''}`}>
				<StudentsIcon stroke={isActive('/students') ? 'white' : 'black'} />
				<span>Uczniowie</span>
			</Link>
		</StyledSidebar>
	)
}

export default Sidebar