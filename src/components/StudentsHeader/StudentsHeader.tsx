import { useSelector } from 'react-redux'
import SearchIcon from '../../icons/SearchIcon/SearchIcon'
import { StudentsHeaderProps } from '../../theme/types'
import { SearchBox, StyledHeader } from './StudentsHeader.styles'
import { RootState } from '../../redux/store'

const StudentsHeader = ({ setSearchQuery, addStudent }: StudentsHeaderProps) => {
	const isOpen = useSelector((state: RootState) => state.students.isOpen)

	return (
		<StyledHeader isOpen={isOpen}>
			<h1>Lista uczniów</h1>
			<SearchBox isOpen={isOpen}>
				<input type="search" placeholder="Szukaj uczniów..." onChange={e => setSearchQuery(e.target.value)} />
				<SearchIcon />
				<button onClick={addStudent}>+</button>
			</SearchBox>
		</StyledHeader>
	)
}

export default StudentsHeader
