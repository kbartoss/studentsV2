import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
import { StudentsHeaderProps } from '../../../../theme/types'
import SearchIcon from '../../../../icons/SearchIcon/SearchIcon'
import { SearchBox, StyledHeader } from './StudentsHeader.styles'
import strings from '../../../../constants/strings'

const StudentsHeader = ({ setSearchQuery, addStudent }: StudentsHeaderProps) => {
	const isOpen = useSelector((state: RootState) => state.students.isOpen)

	return (
		<StyledHeader isOpen={isOpen}>
			<h1>{strings.studentsListText}</h1>
			<SearchBox isOpen={isOpen}>
				<input type="search" placeholder="Szukaj uczniów..." onChange={e => setSearchQuery(e.target.value)} />
				<SearchIcon />
				<button onClick={addStudent}>+</button>
			</SearchBox>
		</StyledHeader>
	)
}

export default StudentsHeader
