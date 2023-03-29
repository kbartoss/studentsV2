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
			<NavLink to="/">
				{({ isActive }) => (
					<>
						<StartIcon stroke={isActive ? 'white' : 'black'} />
						<span>Start</span>
					</>
				)}
			</NavLink>
			<NavLink to="/students">
				{({ isActive }) => (
					<>
						<StudentsIcon stroke={isActive ? 'white' : 'black'} />
						<span>Uczniowie</span>
					</>
				)}
			</NavLink>
		</StyledSidebar>
	)
}

export default Sidebar
