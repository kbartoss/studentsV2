import SearchIcon from '../../icons/SearchIcon/SearchIcon'
import { StyledHeader } from './StudentsHeader.styles'

const StudentsHeader = ({ setSearchQuery, addStudent }: any) => {
	return (
		<StyledHeader>
			<h1>Lista uczniów</h1>
			<div className="search-box">
				<input type="search" placeholder="Szukaj uczniów..." onChange={e => setSearchQuery(e.target.value)} />
				<SearchIcon />
				<button onClick={addStudent}>+</button>
			</div>
		</StyledHeader>
	)
}

export default StudentsHeader
