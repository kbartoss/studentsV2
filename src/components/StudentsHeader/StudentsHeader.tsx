import SearchIcon from '../../icons/SearchIcon/SearchIcon'
import { SearchBox, StyledHeader } from './StudentsHeader.styles'

const StudentsHeader = ({ setSearchQuery, addStudent }: any) => {
	return (
		<StyledHeader>
			<h1>Lista uczniów</h1>
			<SearchBox>
				<input type="search" placeholder="Szukaj uczniów..." onChange={e => setSearchQuery(e.target.value)} />
				<SearchIcon />
				<button onClick={addStudent}>+</button>
			</SearchBox>
		</StyledHeader>
	)
}

export default StudentsHeader
