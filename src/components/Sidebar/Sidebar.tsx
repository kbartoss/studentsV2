import { NavLink } from 'react-router-dom'
import { StyledSidebar } from './Sidebar.styles'
import StudentsIcon from '../../icons/StudentsIcon'
import StartIcon from '../../icons/StartIcon'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const Sidebar = () => {
	const isOpen = useSelector((state: RootState) => state.students.isOpen)

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
