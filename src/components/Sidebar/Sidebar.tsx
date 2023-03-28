import { NavLink } from 'react-router-dom'
import { StyledSidebar } from './Sidebar.styles'
import StudentsIcon from '../../icons/StudentsIcon'
import StartIcon from '../../icons/StartIcon'

type SidebarProps = {
	isOpen: boolean
}

const Sidebar = ({ isOpen }: SidebarProps) => {
	return (
		<StyledSidebar isOpen={isOpen}>
			<NavLink exact to="/">
				{({ isActive }) => (
					<>
						<StartIcon stroke={isActive ? 'white' : 'black'} />
						<span>Start</span>
					</>
				)}
			</NavLink>
			<NavLink exact to="/students">
				{({ isActive }) => (
					<>
						<StudentsIcon stroke={location.pathname === '/students' ? 'white' : 'black'} />
						<span>Uczniowie</span>
					</>
				)}
			</NavLink>
		</StyledSidebar>
	)
}

export default Sidebar
