import searchIcon from '../images/search-icon.png'
import { StyledHeader } from '../styles/StudentsHeader.styles'

const StudentsHeader = ({ setSearchQuery }: any) => {
	return (
		<StyledHeader>
			<h1>Lista uczniów</h1>
			<div className="search-box">
				<input type="search" placeholder="Szukaj uczniów..." onChange={e => setSearchQuery(e.target.value)} />
				<img src={searchIcon} alt="Search"/>
				<button>+</button>
			</div>
		</StyledHeader>
	)
}

export default StudentsHeader